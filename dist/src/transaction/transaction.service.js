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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
let TransactionService = class TransactionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            return await this.prisma.transaction.create({
                data: {
                    price: dto.price,
                    status: dto.status,
                    reason: dto.reason ?? null,
                    canceledTime: dto.canceledTime ? new Date(dto.canceledTime) : null,
                    performedTime: dto.performedTime ? new Date(dto.performedTime) : null,
                    lesson: { connect: { id: dto.lessonId } },
                    student: { connect: { id: dto.studentId } },
                },
            });
        }
        catch (e) {
            if (e.code === 'P2025') {
                throw new common_1.NotFoundException('Lesson or Student not found');
            }
            throw e;
        }
    }
    async findAll(query) {
        const { page = 1, limit = 10, lessonId, studentId, status, performedTimeFrom, performedTimeTo, } = query;
        const skip = (page - 1) * limit;
        const where = { isDeleted: false };
        if (lessonId)
            where.lessonId = lessonId;
        if (studentId)
            where.studentId = studentId;
        if (status)
            where.status = status;
        if (performedTimeFrom || performedTimeTo) {
            where.performedTime = {};
            if (performedTimeFrom)
                where.performedTime.gte = new Date(performedTimeFrom);
            if (performedTimeTo)
                where.performedTime.lte = new Date(performedTimeTo);
        }
        const [data, total] = await Promise.all([
            this.prisma.transaction.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    lesson: {
                        select: { id: true, name: true, startTime: true, endTime: true },
                    },
                    student: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            phoneNumber: true,
                        },
                    },
                },
            }),
            this.prisma.transaction.count({ where }),
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const transaction = await this.prisma.transaction.findFirst({
            where: { id, isDeleted: false },
            include: {
                lesson: {
                    select: { id: true, name: true, startTime: true, endTime: true },
                },
                student: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        phoneNumber: true,
                    },
                },
            },
        });
        if (!transaction) {
            throw new common_1.NotFoundException('Transaction not found');
        }
        return transaction;
    }
    async update(id, dto) {
        const transaction = await this.findOne(id);
        if (transaction.status === enums_1.TransactionStatus.paid &&
            dto.status === enums_1.TransactionStatus.cancelled) {
            throw new common_1.BadRequestException('Completed transaction cannot be cancelled');
        }
        return this.prisma.transaction.update({
            where: { id },
            data: {
                lessonId: dto.lessonId,
                studentId: dto.studentId,
                price: dto.price,
                status: dto.status,
                reason: dto.reason,
                canceledTime: dto.canceledTime ? new Date(dto.canceledTime) : undefined,
                performedTime: dto.performedTime
                    ? new Date(dto.performedTime)
                    : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.transaction.update({
            where: { id },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
        });
    }
    async cancelTransaction(id, reason) {
        const transaction = await this.findOne(id);
        if (transaction.status === enums_1.TransactionStatus.cancelled) {
            throw new common_1.BadRequestException('Transaction already cancelled');
        }
        if (transaction.status === enums_1.TransactionStatus.paid) {
            throw new common_1.BadRequestException('Completed transaction cannot be cancelled');
        }
        return this.prisma.transaction.update({
            where: { id },
            data: {
                status: enums_1.TransactionStatus.cancelled,
                canceledTime: new Date(),
                reason: reason ?? transaction.reason,
            },
        });
    }
    async completeTransaction(id) {
        const transaction = await this.findOne(id);
        if (transaction.status === enums_1.TransactionStatus.paid) {
            throw new common_1.BadRequestException('Transaction already completed');
        }
        if (transaction.status === enums_1.TransactionStatus.cancelled) {
            throw new common_1.BadRequestException('Cancelled transaction cannot be completed');
        }
        return this.prisma.transaction.update({
            where: { id },
            data: {
                status: enums_1.TransactionStatus.paid,
                performedTime: new Date(),
            },
        });
    }
    async getStudentTransactions(studentId) {
        return this.prisma.transaction.findMany({
            where: { studentId, isDeleted: false },
            orderBy: { createdAt: 'desc' },
            include: {
                lesson: {
                    select: { id: true, name: true, startTime: true, endTime: true },
                },
            },
        });
    }
    async getLessonTransactions(lessonId) {
        return this.prisma.transaction.findMany({
            where: { lessonId, isDeleted: false },
            orderBy: { createdAt: 'desc' },
            include: {
                student: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        phoneNumber: true,
                    },
                },
            },
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map