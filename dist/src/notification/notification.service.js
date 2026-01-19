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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const student = await this.prisma.student.findUnique({
            where: { id: dto.studentId },
        });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        const lesson = await this.prisma.lesson.findUnique({
            where: { id: dto.lessonId },
        });
        if (!lesson)
            throw new common_1.NotFoundException('Lesson not found');
        const existingNotification = await this.prisma.notification.findUnique({
            where: { lessonId: dto.lessonId },
        });
        if (existingNotification)
            throw new common_1.BadRequestException('Notification already exists for this lesson');
        return this.prisma.notification.create({
            data: {
                studentId: dto.studentId,
                lessonId: dto.lessonId,
                message: dto.message,
                sendAt: new Date(dto.sendAt),
                isSend: dto.isSend ?? false,
            },
        });
    }
    async findAll(query) {
        const { page = 1, limit = 10, studentId, lessonId, isSend, isDeleted, sendAtFrom, sendAtTo, } = query;
        const skip = (page - 1) * limit;
        const where = { isDeleted: isDeleted ?? false };
        if (studentId)
            where.studentId = studentId;
        if (lessonId)
            where.lessonId = lessonId;
        if (isSend !== undefined)
            where.isSend = isSend;
        if (sendAtFrom || sendAtTo) {
            where.sendAt = {};
            if (sendAtFrom)
                where.sendAt.gte = new Date(sendAtFrom);
            if (sendAtTo)
                where.sendAt.lte = new Date(sendAtTo);
        }
        const [data, total] = await Promise.all([
            this.prisma.notification.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.notification.count({ where }),
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
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification || notification.isDeleted)
            throw new common_1.NotFoundException('Notification not found');
        return notification;
    }
    async update(id, dto) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification || notification.isDeleted)
            throw new common_1.NotFoundException('Notification not found');
        if (dto.lessonId && dto.lessonId !== notification.lessonId) {
            const existingNotification = await this.prisma.notification.findUnique({
                where: { lessonId: dto.lessonId },
            });
            if (existingNotification)
                throw new common_1.BadRequestException('Notification already exists for this lesson');
        }
        const data = {};
        if (dto.studentId)
            data.studentId = dto.studentId;
        if (dto.lessonId)
            data.lessonId = dto.lessonId;
        if (dto.message)
            data.message = dto.message;
        if (dto.sendAt)
            data.sendAt = new Date(dto.sendAt);
        if (dto.isSend !== undefined)
            data.isSend = dto.isSend;
        return this.prisma.notification.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification || notification.isDeleted)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notification.update({
            where: { id },
            data: { isDeleted: true, deletedAt: new Date() },
        });
    }
    async restore(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notification.update({
            where: { id },
            data: { isDeleted: false, deletedAt: null },
        });
    }
    async hardDelete(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notification.delete({
            where: { id },
        });
    }
    async markAsSent(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification || notification.isDeleted)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notification.update({
            where: { id },
            data: { isSend: true },
        });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map