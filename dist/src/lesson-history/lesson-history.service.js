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
exports.LessonHistoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const schedule_1 = require("@nestjs/schedule");
let LessonHistoryService = class LessonHistoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            const lesson = await this.prisma.lesson.findUnique({
                where: { id: dto.lessonId },
            });
            if (!lesson || lesson.isDeleted) {
                throw new common_1.NotFoundException('Lesson not found or has been deleted');
            }
            const now = new Date();
            if (lesson.endTime > now) {
                throw new common_1.BadRequestException("Cannot create history for a lesson that hasn't ended yet");
            }
            if (lesson.teacherId !== dto.teacherId) {
                throw new common_1.BadRequestException("Teacher ID does not match the lesson's assigned teacher");
            }
            if (lesson.studentId !== dto.studentId) {
                throw new common_1.BadRequestException("Student ID does not match the lesson's assigned student");
            }
            const teacher = await this.prisma.teacher.findUnique({
                where: { id: dto.teacherId },
            });
            if (!teacher || teacher.isDeleted) {
                throw new common_1.NotFoundException('Teacher not found or inactive');
            }
            const student = await this.prisma.student.findUnique({
                where: { id: dto.studentId },
            });
            if (!student || student.isDeleted) {
                throw new common_1.NotFoundException('Student not found or inactive');
            }
            const existingHistory = await this.prisma.lessonHistory.findFirst({
                where: {
                    lessonId: dto.lessonId,
                    isDeleted: false,
                },
            });
            if (existingHistory) {
                throw new common_1.BadRequestException('Lesson history already exists for this lesson');
            }
            if (dto.star < 1 || dto.star > 5) {
                throw new common_1.BadRequestException('Star rating must be between 1 and 5');
            }
            if (dto.feedback && dto.feedback.length > 1000) {
                throw new common_1.BadRequestException('Feedback cannot exceed 1000 characters');
            }
            const history = await this.prisma.lessonHistory.create({
                data: {
                    lessonId: dto.lessonId,
                    star: dto.star,
                    feedback: dto.feedback,
                    teacherId: dto.teacherId,
                    studentId: dto.studentId,
                },
                include: {
                    lesson: {
                        select: {
                            id: true,
                            name: true,
                            startTime: true,
                            endTime: true,
                        },
                    },
                    teacher: {
                        select: {
                            id: true,
                            fullName: true,
                        },
                    },
                    student: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
            return {
                statusCode: 201,
                message: 'Lesson history created successfully',
                history,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException ||
                error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Error creating lesson history:', error);
            throw new common_1.InternalServerErrorException('Lesson history creation failed');
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
                throw new common_1.NotFoundException('No lesson histories found');
            }
            return {
                statusCode: 200,
                message: 'Lesson histories retrieved successfully',
                count,
                histories,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Error retrieving lesson histories:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve lesson histories');
        }
    }
    async findOne(id) {
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
                throw new common_1.NotFoundException('Lesson history not found');
            }
            return {
                statusCode: 200,
                message: 'Lesson history retrieved successfully',
                history,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error(`Error retrieving lesson history with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to retrieve lesson history');
        }
    }
    async update(id, dto) {
        try {
            const existingHistory = await this.prisma.lessonHistory.findFirst({
                where: { id, isDeleted: false },
            });
            if (!existingHistory) {
                throw new common_1.NotFoundException('Lesson history not found');
            }
            const teacherId = dto.teacherId ?? existingHistory.teacherId;
            const teacher = await this.prisma.teacher.findUnique({
                where: { id: teacherId },
            });
            if (!teacher || teacher.isDeleted) {
                throw new common_1.NotFoundException('Teacher not found or inactive');
            }
            const studentId = dto.studentId ?? existingHistory.studentId;
            const student = await this.prisma.student.findUnique({
                where: { id: studentId },
            });
            if (!student || student.isDeleted) {
                throw new common_1.NotFoundException('Student not found or inactive');
            }
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
                throw new common_1.BadRequestException('Duplicate lesson history exists for this teacher and student');
            }
            const updatedHistory = await this.prisma.lessonHistory.update({
                where: { id },
                data: {
                    ...dto,
                    teacherId,
                    studentId,
                },
            });
            return {
                statusCode: 200,
                message: 'Lesson history updated successfully',
                history: updatedHistory,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException ||
                error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error(`Error updating lesson history with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Lesson history update failed');
        }
    }
    async remove(id) {
        try {
            const history = await this.prisma.lessonHistory.findFirst({
                where: { id, isDeleted: false },
            });
            if (!history) {
                throw new common_1.NotFoundException('Lesson history not found or already deleted');
            }
            const dependentLesson = await this.prisma.lesson.findFirst({
                where: { id: history.lessonId, isDeleted: false },
            });
            if (dependentLesson) {
                throw new common_1.BadRequestException('Cannot delete lesson history because the lesson exists');
            }
            const deletedHistory = await this.prisma.lessonHistory.update({
                where: { id },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                },
            });
            return {
                statusCode: 200,
                message: 'Lesson history deleted successfully',
                history: deletedHistory,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException ||
                error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error(`Error deleting lesson history with id ${id}:`, error);
            throw new common_1.InternalServerErrorException('Lesson history deletion failed');
        }
    }
    async getLessonsHistoryByStId(id) {
        const lessons = await this.prisma.lessonHistory.findMany({
            where: {
                studentId: id,
                isDeleted: false,
            },
            include: {
                teacher: true,
                lesson: true,
            },
        });
        if (!lessons.length) {
            return {
                message: 'No lesson histroies so far',
                lessons,
            };
        }
        return {
            message: 'Histrory retrieved successfully',
            lessons,
        };
    }
    async autoCreateHistoryForCompletedLessons() {
        const now = new Date();
        const completedLessons = await this.prisma.lesson.findMany({
            where: {
                endTime: { lte: now },
                isDeleted: false,
                studentId: { not: { equals: null } },
                lessonHistories: {
                    none: { isDeleted: false },
                },
            },
        });
        console.log(`[CRON] Found ${completedLessons.length} lessons without history`);
        for (const lesson of completedLessons) {
            try {
                await this.prisma.lessonHistory.create({
                    data: {
                        lessonId: lesson.id,
                        teacherId: lesson.teacherId,
                        studentId: lesson.studentId,
                        star: 0,
                        feedback: 'Automatically created by system',
                    },
                });
                console.log(`[CRON] Created history for lesson ${lesson.id}`);
            }
            catch (error) {
                console.error(`[CRON] Failed for lesson ${lesson.id}:`, error);
            }
        }
    }
};
exports.LessonHistoryService = LessonHistoryService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LessonHistoryService.prototype, "autoCreateHistoryForCompletedLessons", null);
exports.LessonHistoryService = LessonHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonHistoryService);
//# sourceMappingURL=lesson-history.service.js.map