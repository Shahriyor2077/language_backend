"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherPaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeacherPaymentService = class TeacherPaymentService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createTeacherPaymentDto) {
        const { teacherId, lessonId, totalLessonAmount, platformComission, platformAmount, teacherAmount, paidBy, isCanceled, canceledAt, canceledBy, canceledReason, notes, } = createTeacherPaymentDto;
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id: teacherId },
        });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${teacherId} not found`);
        }
        const lesson = await this.prismaService.lesson.findUnique({
            where: { id: lessonId },
        });
        if (!lesson) {
            throw new common_1.NotFoundException(`Lesson with ID ${lessonId} not found`);
        }
        const existingPayment = await this.prismaService.teacherPayment.findUnique({
            where: { lessonId },
        });
        if (existingPayment) {
            throw new common_1.ConflictException(`Payment already exists for lesson ID ${lessonId}`);
        }
        if (isCanceled === true) {
            throw new common_1.BadRequestException('Cannot create a payment with canceled status. Create the payment first, then cancel it if needed.');
        }
        const sumCheck = platformAmount + teacherAmount;
        if (Math.abs(sumCheck - totalLessonAmount) > 0.01) {
            throw new common_1.BadRequestException(`Sum of platformAmount (${platformAmount}) and teacherAmount (${teacherAmount}) must equal totalLessonAmount (${totalLessonAmount})`);
        }
        const expectedPlatformAmount = totalLessonAmount * (platformComission / 100);
        if (Math.abs(platformAmount - expectedPlatformAmount) > 0.01) {
            throw new common_1.BadRequestException(`Platform amount (${platformAmount}) does not match expected calculation: ${totalLessonAmount} * (${platformComission} / 100) = ${expectedPlatformAmount}`);
        }
        const expectedTeacherAmount = totalLessonAmount - platformAmount;
        if (Math.abs(teacherAmount - expectedTeacherAmount) > 0.01) {
            throw new common_1.BadRequestException(`Teacher amount (${teacherAmount}) does not match expected calculation: ${totalLessonAmount} - ${platformAmount} = ${expectedTeacherAmount}`);
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
    async findAll(page = 1, limit = 10, teacherId, isCanceled, startDate, endDate) {
        const skip = (page - 1) * limit;
        const where = {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Teacher payment with ID ${id} not found`);
        }
        return {
            message: 'Teacher payment retrieved successfully',
            payment,
        };
    }
    async update(id, updateTeacherPaymentDto) {
        const existingPayment = await this.prismaService.teacherPayment.findFirst({
            where: {
                id,
                isDeleted: false,
            },
        });
        if (!existingPayment) {
            throw new common_1.NotFoundException(`Teacher payment with ID ${id} not found`);
        }
        if (existingPayment.isCanceled) {
            throw new common_1.BadRequestException('Cannot update a canceled payment');
        }
        const { teacherId, lessonId, ...updateData } = updateTeacherPaymentDto;
        const newPlatformAmount = updateData.platformAmount ?? existingPayment.platformAmount;
        const newTeacherAmount = updateData.teacherAmount ?? existingPayment.teacherAmount;
        const newTotalAmount = updateData.totalLessonAmount ?? existingPayment.totalLessonAmount;
        if (newPlatformAmount + newTeacherAmount !== newTotalAmount) {
            throw new common_1.BadRequestException('Sum of platformAmount and teacherAmount must equal totalLessonAmount');
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
    async remove(id) {
        const existingPayment = await this.prismaService.teacherPayment.findFirst({
            where: {
                id,
                isDeleted: false,
            },
        });
        if (!existingPayment) {
            throw new common_1.NotFoundException(`Teacher payment with ID ${id} not found`);
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
    async cancel(paymentId, canceledBy, canceledReason) {
        if (!canceledBy || !canceledReason) {
            throw new common_1.BadRequestException('canceledBy and canceledReason are required when canceling a payment');
        }
        const payment = await this.prismaService.teacherPayment.findUnique({
            where: { id: paymentId },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${paymentId} not found`);
        }
        if (payment.isCanceled) {
            throw new common_1.ConflictException('Payment is already canceled');
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
    async getTeacherPaymentsByid(teacherId) {
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
};
exports.TeacherPaymentService = TeacherPaymentService;
exports.TeacherPaymentService = TeacherPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherPaymentService);
//# sourceMappingURL=teacher-payment.service.js.map