import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonHistoryDto } from './dto/create-lesson-history.dto';
import { UpdateLessonHistoryDto } from './dto/update-lesson-history.dto';

@Injectable()
export class LessonHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLessonHistoryDto) {
    try {
      // 1️⃣ Teacher mavjudligi va status tekshiruvi
      const teacher = await this.prisma.teacher.findUnique({
        where: { id: dto.teacherId },
      });
      if (!teacher || teacher.isDeleted) {
        throw new NotFoundException('Teacher not found or inactive');
      }

      // 2️⃣ Student mavjudligi tekshiruvi
      const student = await this.prisma.student.findUnique({
        where: { id: dto.studentId },
      });
      if (!student || student.isDeleted) {
        throw new NotFoundException('Student not found or inactive');
      }

      // 3️⃣ Duplicate check: bir teacher va student uchun bir xil lesson bo‘lmasligini tekshirish
      const existingHistory = await this.prisma.lessonHistory.findFirst({
        where: {
          lessonId: dto.lessonId,
          teacherId: dto.teacherId,
          studentId: dto.studentId,
          isDeleted: false,
        },
      });

      if (existingHistory) {
        throw new BadRequestException(
          'Lesson history already exists for this teacher and student',
        );
      }

      // 4️⃣ LessonHistory yaratish
      const history = await this.prisma.lessonHistory.create({
        data: {
          lessonId: dto.lessonId,
          star: dto.star,
          feedback: dto.feedback,
          teacherId: dto.teacherId,
          studentId: dto.studentId,
        },
      });

      // 5️⃣ Clear response
      return {
        statusCode: 201,
        message: 'Lesson history created successfully',
        history,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      throw new InternalServerErrorException('Lesson history creation failed');
    }
  }

  async findAll() {
    try {
      const [histories, count] = await this.prisma.$transaction([
        this.prisma.lessonHistory.findMany({
          where: { isDeleted: false },
          include: {
            lesson: true,
            teacher: true,
            student: true,
          },
          orderBy: { createdAt: 'desc' },
        }),
        this.prisma.lessonHistory.count({
          where: { isDeleted: false },
        }),
      ]);

      if (!count) {
        throw new NotFoundException('No lesson histories found');
      }

      return {
        statusCode: 200,
        message: 'Lesson histories retrieved successfully',
        count,
        histories,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Error retrieving lesson histories:', error);
      throw new InternalServerErrorException(
        'Failed to retrieve lesson histories',
      );
    }
  }

  async findOne(id: string) {
    try {
      const history = await this.prisma.lessonHistory.findFirst({
        where: { id, isDeleted: false },
        include: {
          lesson: true,
          teacher: true,
          student: true,
        },
      });

      if (!history) {
        throw new NotFoundException('Lesson history not found');
      }

      return {
        statusCode: 200,
        message: 'Lesson history retrieved successfully',
        history,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error(`Error retrieving lesson history with id ${id}:`, error);
      throw new InternalServerErrorException(
        'Failed to retrieve lesson history',
      );
    }
  }

  async update(id: string, dto: UpdateLessonHistoryDto) {
    try {
      // 1️⃣ mavjud lesson history ni tekshirish
      const existingHistory = await this.prisma.lessonHistory.findFirst({
        where: { id, isDeleted: false },
      });

      if (!existingHistory) {
        throw new NotFoundException('Lesson history not found');
      }

      // 2️⃣ teacher validatsiyasi (agar o‘zgargan bo‘lsa)
      const teacherId = dto.teacherId ?? existingHistory.teacherId;
      const teacher = await this.prisma.teacher.findUnique({
        where: { id: teacherId },
      });
      if (!teacher || teacher.isDeleted) {
        throw new NotFoundException('Teacher not found or inactive');
      }

      // 3️⃣ student validatsiyasi (agar o‘zgargan bo‘lsa)
      const studentId = dto.studentId ?? existingHistory.studentId;
      const student = await this.prisma.student.findUnique({
        where: { id: studentId },
      });
      if (!student || student.isDeleted) {
        throw new NotFoundException('Student not found or inactive');
      }

      // 4️⃣ Duplicate check: bir teacher-student-lesson uchun mavjud yozuv
      const duplicate = await this.prisma.lessonHistory.findFirst({
        where: {
          id: { not: id },
          lessonId: dto.lessonId ?? existingHistory.lessonId,
          teacherId,
          studentId,
          isDeleted: false,
        },
      });
      if (duplicate) {
        throw new BadRequestException(
          'Duplicate lesson history exists for this teacher and student',
        );
      }

      // 5️⃣ update qilish
      const updatedHistory = await this.prisma.lessonHistory.update({
        where: { id },
        data: {
          ...dto,
          teacherId,
          studentId,
        },
      });

      // 6️⃣ Chiroyli response
      return {
        statusCode: 200,
        message: 'Lesson history updated successfully',
        history: updatedHistory,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      console.error(`Error updating lesson history with id ${id}:`, error);
      throw new InternalServerErrorException('Lesson history update failed');
    }
  }

  async remove(id: string) {
    try {
      // 1️⃣ Lesson history mavjudligini tekshirish
      const history = await this.prisma.lessonHistory.findFirst({
        where: { id, isDeleted: false },
      });

      if (!history) {
        throw new NotFoundException(
          'Lesson history not found or already deleted',
        );
      }

      // 🔒 OPTIONAL BUSINESS RULE:
      // Masalan, agar lesson asosida dars yaratilgan bo‘lsa, delete ni bloklash
      const dependentLesson = await this.prisma.lesson.findFirst({
        where: { id: history.lessonId, isDeleted: false },
      });

      if (dependentLesson) {
        throw new BadRequestException(
          'Cannot delete lesson history because the lesson exists',
        );
      }

      // 2️⃣ Soft delete
      const deletedHistory = await this.prisma.lessonHistory.update({
        where: { id },
        data: {
          isDeleted: true,
          deletedAt: new Date(),
        },
      });

      // 3️⃣ Chiroyli response
      return {
        statusCode: 200,
        message: 'Lesson history deleted successfully',
        history: deletedHistory,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      console.error(`Error deleting lesson history with id ${id}:`, error);
      throw new InternalServerErrorException('Lesson history deletion failed');
    }
  }
}
