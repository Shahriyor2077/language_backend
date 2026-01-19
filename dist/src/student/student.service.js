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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const lesson_service_1 = require("../lesson/lesson.service");
let StudentService = class StudentService {
    prisma;
    lessonService;
    constructor(prisma, lessonService) {
        this.prisma = prisma;
        this.lessonService = lessonService;
    }
    async create(createStudentDto) {
        try {
            return await this.prisma.student.create({
                data: createStudentDto,
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Phone number or Telegram ID already exists');
            }
            throw error;
        }
    }
    async findAll(query) {
        const students = await this.prisma.student.findMany();
        if (students.length === 0) {
            throw new common_1.NotFoundException('No students found');
        }
        return {
            message: 'Students retrieved successfully',
            students,
        };
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        return {
            message: 'Student found successfully',
            student,
        };
    }
    async update(id, updateStudentDto) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        try {
            return await this.prisma.student.update({
                where: { id },
                data: updateStudentDto,
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Phone number or Telegram ID already exists');
            }
            throw error;
        }
    }
    async remove(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        return this.prisma.student.update({
            where: { id },
            data: { isDeleted: true, deletedAt: new Date() },
        });
    }
    async restore(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        return this.prisma.student.update({
            where: { id },
            data: { isDeleted: false, deletedAt: null },
        });
    }
    async hardDelete(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        await this.prisma.student.delete({ where: { id } });
    }
    async block(id, reason) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        return this.prisma.student.update({
            where: { id },
            data: { isBlocked: true, blockedAt: new Date(), blockedReason: reason },
        });
    }
    async unblock(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('Student not found');
        return this.prisma.student.update({
            where: { id },
            data: { isBlocked: false, blockedAt: null, blockedReason: null },
        });
    }
    async findLessons(id) {
        const Mylessons = await this.lessonService.findAllbyStudent(id);
        if (!Mylessons) {
            throw new common_1.NotFoundException('No lessons found for this student');
        }
        return {
            message: 'Lessons retrieved successfully',
            lessons: Mylessons,
        };
    }
    async findTeachers() {
        const teachers = await this.prisma.teacher.findMany({
            include: {
                lessons: {
                    where: {
                        status: 'available',
                    },
                },
            },
        });
        if (!teachers) {
            throw new common_1.NotFoundException('No teachers found');
        }
        return {
            message: 'Teachers retrieved successfully',
            teachers: teachers,
        };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        lesson_service_1.LessonService])
], StudentService);
//# sourceMappingURL=student.service.js.map