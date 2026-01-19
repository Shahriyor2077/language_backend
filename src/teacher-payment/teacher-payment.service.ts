import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateTeacherPaymentDto } from './dto/create-teacher-payment.dto';
import { UpdateTeacherPaymentDto } from './dto/update-teacher-payment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeacherPaymentService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createTeacherPaymentDto: CreateTeacherPaymentDto) {
    const {
      teacherId,
      lessonId,
      totalLessonAmount,
      platformComission,
      platformAmount,
      teacherAmount,
      paidBy,
      isCanceled,
      canceledAt,
      canceledBy,
      canceledReason,
      notes,
    } = createTeacherPaymentDto;

    const teacher = await this.prismaService.teacher.findUnique({
      where: { id: teacherId },
    });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }

    const lesson = await this.prismaService.lesson.findUnique({
      where: { id: lessonId },
    });
    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${lessonId} not found`);
    }

    const existingPayment = await this.prismaService.teacherPayment.findUnique({
      where: { lessonId },
    });
    if (existingPayment) {
      throw new ConflictException(
        `Payment already exists for lesson ID ${lessonId}`,
      );
    }

    if (isCanceled === true) {
      throw new BadRequestException(
        'Cannot create a payment with canceled status. Create the payment first, then cancel it if needed.',
      );
    }

    const sumCheck = platformAmount + teacherAmount;
    if (Math.abs(sumCheck - totalLessonAmount) > 0.01) {
      throw new BadRequestException(
        `Sum of platformAmount (${platformAmount}) and teacherAmount (${teacherAmount}) must equal totalLessonAmount (${totalLessonAmount})`,
      );
    }

    const expectedPlatformAmount =
      totalLessonAmount * (platformComission / 100);
    if (Math.abs(platformAmount - expectedPlatformAmount) > 0.01) {
      throw new BadRequestException(
        `Platform amount (${platformAmount}) does not match expected calculation: ${totalLessonAmount} * (${platformComission} / 100) = ${expectedPlatformAmount}`,
      );
    }

    const expectedTeacherAmount = totalLessonAmount - platformAmount;
    if (Math.abs(teacherAmount - expectedTeacherAmount) > 0.01) {
      throw new BadRequestException(
        `Teacher amount (${teacherAmount}) does not match expected calculation: ${totalLessonAmount} - ${platformAmount} = ${expectedTeacherAmount}`,
      );
    }

    const payment = await this.prismaService.teacherPayment.create({
      data: {
        teacherId,
        lessonId,
        totalLessonAmount,
        platformComission,
        platformAmount,
        teacherAmount,
        paidBy,
        paidAt: new Date(),
        isCanceled: false,
        canceledAt: null,
        canceledBy: null,
        canceledReason: null,
        notes: notes ?? null,
      },
      include: {
        teacher: true,
        lesson: true,
      },
    });

    return {
      message: 'Teacher payment created successfully',
      payment,
    };
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    teacherId?: string,
    isCanceled?: boolean,
    startDate?: string,
    endDate?: string,
  ) {
    const skip = (page - 1) * limit;

    const where: any = {
      isDeleted: false,
    };

    if (teacherId) {
      where.teacherId = teacherId;
    }

    if (isCanceled !== undefined) {
      where.isCanceled = isCanceled;
    }

    if (startDate || endDate) {
      where.paidAt = {};
      if (startDate) {
        where.paidAt.gte = new Date(startDate);
      }
      if (endDate) {
        where.paidAt.lte = new Date(endDate);
      }
    }

    const total = await this.prismaService.teacherPayment.count({ where });

    const payments = await this.prismaService.teacherPayment.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        totalLessonAmount: true,
        platformComission: true,
        teacherAmount: true,
        platformAmount: true,
        isCanceled: true,
        paidAt: true,
        teacher: {
          select: {
            fullName: true,
          },
        },
      },
    });

    return {
      message: 'Teacher payments retrieved successfully1',
      payments,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const payment = await this.prismaService.teacherPayment.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        teacher: true,
      },
    });

    if (!payment) {
      throw new NotFoundException(`Teacher payment with ID ${id} not found`);
    }

    return {
      message: 'Teacher payment retrieved successfully',
      payment,
    };
  }

  async update(id: string, updateTeacherPaymentDto: UpdateTeacherPaymentDto) {
    const existingPayment = await this.prismaService.teacherPayment.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!existingPayment) {
      throw new NotFoundException(`Teacher payment with ID ${id} not found`);
    }

    if (existingPayment.isCanceled) {
      throw new BadRequestException('Cannot update a canceled payment');
    }

    const { teacherId, lessonId, ...updateData } =
      updateTeacherPaymentDto as any;

    const newPlatformAmount =
      updateData.platformAmount ?? existingPayment.platformAmount;
    const newTeacherAmount =
      updateData.teacherAmount ?? existingPayment.teacherAmount;
    const newTotalAmount =
      updateData.totalLessonAmount ?? existingPayment.totalLessonAmount;

    if (newPlatformAmount + newTeacherAmount !== newTotalAmount) {
      throw new BadRequestException(
        'Sum of platformAmount and teacherAmount must equal totalLessonAmount',
      );
    }

    if (updateData.paidAt) {
      updateData.paidAt = new Date(updateData.paidAt);
    }
    if (updateData.canceledAt) {
      updateData.canceledAt = new Date(updateData.canceledAt);
    }

    const payment = await this.prismaService.teacherPayment.update({
      where: { id },
      data: updateData,
      include: {
        teacher: true,
        lesson: true,
      },
    });

    return {
      message: 'Teacher payment updated successfully',
      payment,
    };
  }

  async remove(id: string) {
    const existingPayment = await this.prismaService.teacherPayment.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!existingPayment) {
      throw new NotFoundException(`Teacher payment with ID ${id} not found`);
    }

    const payment = await this.prismaService.teacherPayment.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    return {
      message: 'Teacher payment deleted successfully',
      payment,
    };
  }

  async cancel(paymentId: string, canceledBy: string, canceledReason: string) {
    if (!canceledBy || !canceledReason) {
      throw new BadRequestException(
        'canceledBy and canceledReason are required when canceling a payment',
      );
    }

    const payment = await this.prismaService.teacherPayment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }

    if (payment.isCanceled) {
      throw new ConflictException('Payment is already canceled');
    }

    return await this.prismaService.teacherPayment.update({
      where: { id: paymentId },
      data: {
        isCanceled: true,
        canceledAt: new Date(),
        canceledBy,
        canceledReason,
      },
    });
  }

  async getTeacherPaymentsByid(teacherId: string) {
    const payments = await this.prismaService.teacherPayment.findMany({
      where: {
        teacherId,
      },
    });

    if (payments.length === 0) {
      return {
        totalPayments: 0,
        totalAmountPaid: 0,
      };
    }

    return {
      message: 'Teacher payments retrieved successfully',
      payments,
    };
  }
}
