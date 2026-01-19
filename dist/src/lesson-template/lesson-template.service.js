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
exports.LessonTemplateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LessonTemplateService = class LessonTemplateService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            const teacher = await this.prisma.teacher.findUnique({
                where: { id: dto.teacherId },
            });
            if (!teacher) {
                throw new common_1.NotFoundException('Teacher not found');
            }
            if (!teacher.isActive || teacher.isDeleted) {
                throw new common_1.BadRequestException('Teacher is not active');
            }
            const existingTemplate = await this.prisma.lessonTemplate.findFirst({
                where: {
                    teacherId: dto.teacherId,
                    name: dto.name,
                    timeSlot: dto.timeSlot,
                    isDeleted: false,
                },
            });
            if (existingTemplate) {
                throw new common_1.BadRequestException('A lesson template with the same name and time slot already exists for this teacher');
            }
            const template = await this.prisma.lessonTemplate.create({
                data: {
                    teacherId: dto.teacherId,
                    name: dto.name,
                    timeSlot: dto.timeSlot,
                    isActive: dto.isActive ?? true,
                },
            });
            return {
                statusCode: 201,
                message: 'Lesson template created successfully',
                template,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException ||
                error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('LessonTemplate creation error:', error);
            throw new common_1.InternalServerErrorException('Lesson template creation failed');
        }
    }
    async findAll() {
        try {
            const [templates, count] = await this.prisma.$transaction([
                this.prisma.lessonTemplate.findMany({
                    where: { isDeleted: false },
                    include: { teacher: true },
                    orderBy: { createdAt: 'desc' },
                }),
                this.prisma.lessonTemplate.count({
                    where: { isDeleted: false },
                }),
            ]);
            if (!count) {
                throw new common_1.NotFoundException('No lesson templates found');
            }
            return {
                statusCode: 200,
                message: 'Lesson templates retrieved successfully',
                count,
                templates,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Error retrieving lesson templates:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve lesson templates');
        }
    }
    async findOne(id) {
        try {
            const template = await this.prisma.lessonTemplate.findFirst({
                where: { id, isDeleted: false },
                include: { teacher: true },
            });
            if (!template) {
                throw new common_1.NotFoundException('Lesson template not found');
            }
            return {
                statusCode: 200,
                message: 'Lesson template retrieved successfully',
                template,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error(`Error retrieving lesson template with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to retrieve lesson template');
        }
    }
    async update(id, dto) {
        try {
            const existingTemplate = await this.prisma.lessonTemplate.findFirst({
                where: { id, isDeleted: false },
            });
            if (!existingTemplate) {
                throw new common_1.NotFoundException('Lesson template not found');
            }
            const teacherId = dto.teacherId ?? existingTemplate.teacherId;
            const teacher = await this.prisma.teacher.findUnique({
                where: { id: teacherId },
            });
            if (!teacher) {
                throw new common_1.NotFoundException('Teacher not found');
            }
            if (!teacher.isActive || teacher.isDeleted) {
                throw new common_1.BadRequestException('Teacher is not active');
            }
            const duplicateTemplate = await this.prisma.lessonTemplate.findFirst({
                where: {
                    id: { not: id },
                    teacherId,
                    name: dto.name ?? existingTemplate.name,
                    timeSlot: dto.timeSlot ?? existingTemplate.timeSlot,
                    isDeleted: false,
                },
            });
            if (duplicateTemplate) {
                throw new common_1.BadRequestException('A lesson template with the same name and time slot already exists for this teacher');
            }
            const updatedTemplate = await this.prisma.lessonTemplate.update({
                where: { id },
                data: {
                    ...dto,
                },
            });
            return {
                statusCode: 200,
                message: 'Lesson template updated successfully',
                template: updatedTemplate,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error(`Error updating lesson template with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to update lesson template');
        }
    }
    async remove(id) {
        try {
            const template = await this.prisma.lessonTemplate.findFirst({
                where: { id, isDeleted: false },
            });
            if (!template) {
                throw new common_1.NotFoundException('Lesson template not found or already deleted');
            }
            const usedInLesson = await this.prisma.lesson.findFirst({
                where: {
                    isDeleted: false,
                    teacherId: template.teacherId,
                    name: template.name,
                },
            });
            if (usedInLesson) {
                throw new common_1.BadRequestException('This template is currently used in a lesson and cannot be deleted');
            }
            const deletedTemplate = await this.prisma.lessonTemplate.update({
                where: { id },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                },
            });
            return {
                statusCode: 200,
                message: 'Lesson template deleted successfully',
                template: deletedTemplate,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException ||
                error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error(`Error deleting lesson template with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to delete lesson template');
        }
    }
};
exports.LessonTemplateService = LessonTemplateService;
exports.LessonTemplateService = LessonTemplateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonTemplateService);
//# sourceMappingURL=lesson-template.service.js.map