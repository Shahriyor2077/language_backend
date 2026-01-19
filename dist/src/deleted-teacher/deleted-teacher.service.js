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
exports.DeletedTeacherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DeletedTeacherService = class DeletedTeacherService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createDeletedTeacherDto) {
        const { teacherId, deletedBy, reason, restoreAt } = createDeletedTeacherDto;
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id: teacherId },
        });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${teacherId} not found`);
        }
        if (teacher.isDeleted) {
            throw new common_1.ConflictException(`Teacher with ID ${teacherId} is already deleted`);
        }
        const admin = await this.prismaService.admin.findUnique({
            where: { id: deletedBy },
        });
        if (!admin) {
            throw new common_1.NotFoundException(`Admin with ID ${deletedBy} not found`);
        }
        if (!admin.isActive || admin.isDeleted) {
            throw new common_1.BadRequestException(`Admin with ID ${deletedBy} is not active or has been deleted`);
        }
        const existingDeletion = await this.prismaService.deletedTeacher.findFirst({
            where: { teacherId },
        });
        if (existingDeletion) {
            throw new common_1.ConflictException(`Deletion record already exists for teacher ID ${teacherId}`);
        }
        const result = await this.prismaService.$transaction(async (prisma) => {
            await prisma.teacher.update({
                where: { id: teacherId },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                },
            });
            const deletedTeacher = await prisma.deletedTeacher.create({
                data: {
                    teacherId,
                    deletedBy,
                    reason,
                    restoreAt: restoreAt ? new Date(restoreAt) : null,
                },
                include: {
                    teacher: true,
                },
            });
            return deletedTeacher;
        });
        return {
            message: 'Teacher deleted successfully',
            deletedTeacher: result,
        };
    }
    async findAll(page = 1, limit = 10, deletedBy, startDate, endDate, hasRestoreDate) {
        const skip = (page - 1) * limit;
        const where = {};
        if (deletedBy) {
            where.deletedBy = deletedBy;
        }
        if (startDate || endDate) {
            where.deletedAt = {};
            if (startDate) {
                where.deletedAt.gte = new Date(startDate);
            }
            if (endDate) {
                where.deletedAt.lte = new Date(endDate);
            }
        }
        if (hasRestoreDate !== undefined) {
            if (hasRestoreDate) {
                where.restoreAt = { not: null };
            }
            else {
                where.restoreAt = null;
            }
        }
        const total = await this.prismaService.deletedTeacher.count({ where });
        const deletedTeachers = await this.prismaService.deletedTeacher.findMany({
            where,
            include: {
                teacher: true,
            },
            skip,
            take: limit,
            orderBy: {
                deletedAt: 'desc',
            },
        });
        return {
            message: 'Deleted teachers retrieved successfully',
            deletedTeachers,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const deletedTeacher = await this.prismaService.deletedTeacher.findUnique({
            where: { id },
            include: {
                teacher: true,
            },
        });
        if (!deletedTeacher) {
            throw new common_1.NotFoundException(`Deleted teacher record with ID ${id} not found`);
        }
        return {
            message: 'Deleted teacher retrieved successfully',
            deletedTeacher,
        };
    }
    async update(id, updateDeletedTeacherDto) {
        const existingRecord = await this.prismaService.deletedTeacher.findUnique({
            where: { id },
        });
        if (!existingRecord) {
            throw new common_1.NotFoundException(`Deleted teacher record with ID ${id} not found`);
        }
        const { teacherId, ...updateData } = updateDeletedTeacherDto;
        if (updateData.deletedBy) {
            const admin = await this.prismaService.admin.findUnique({
                where: { id: updateData.deletedBy },
            });
            if (!admin) {
                throw new common_1.NotFoundException(`Admin with ID ${updateData.deletedBy} not found`);
            }
            if (!admin.isActive || admin.isDeleted) {
                throw new common_1.BadRequestException(`Admin with ID ${updateData.deletedBy} is not active or has been deleted`);
            }
        }
        if (updateData.restoreAt) {
            updateData.restoreAt = new Date(updateData.restoreAt);
        }
        const deletedTeacher = await this.prismaService.deletedTeacher.update({
            where: { id },
            data: updateData,
            include: {
                teacher: true,
            },
        });
        return {
            message: 'Deleted teacher record updated successfully',
            deletedTeacher,
        };
    }
    async remove(id) {
        const existingRecord = await this.prismaService.deletedTeacher.findUnique({
            where: { id },
            include: {
                teacher: true,
            },
        });
        if (!existingRecord) {
            throw new common_1.NotFoundException(`Deleted teacher record with ID ${id} not found`);
        }
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id: existingRecord.teacherId },
        });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${existingRecord.teacherId} not found`);
        }
        if (existingRecord.restoreAt) {
            const now = new Date();
            if (existingRecord.restoreAt > now) {
                throw new common_1.BadRequestException(`Cannot restore teacher yet. Restoration date is set to ${existingRecord.restoreAt.toISOString()}`);
            }
        }
        const result = await this.prismaService.$transaction(async (prisma) => {
            const restoredTeacher = await prisma.teacher.update({
                where: { id: existingRecord.teacherId },
                data: {
                    isDeleted: false,
                    deletedAt: null,
                },
            });
            await prisma.deletedTeacher.delete({
                where: { id },
            });
            return restoredTeacher;
        });
        return {
            message: 'Teacher restored successfully',
            teacher: result,
        };
    }
};
exports.DeletedTeacherService = DeletedTeacherService;
exports.DeletedTeacherService = DeletedTeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeletedTeacherService);
//# sourceMappingURL=deleted-teacher.service.js.map