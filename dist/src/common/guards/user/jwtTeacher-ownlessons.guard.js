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
exports.TeacherOwnsLessonOrAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let TeacherOwnsLessonOrAdminGuard = class TeacherOwnsLessonOrAdminGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const { id: lessonId } = req.params;
        const admin = req.admin;
        if (admin.role === 'superAdmin' || admin.role === 'admin') {
            return true;
        }
        if (admin.role !== 'teacher') {
            throw new common_1.ForbiddenException('Access denied');
        }
        const lesson = await this.prisma.lesson.findUnique({
            where: { id: lessonId },
            select: { teacherId: true },
        });
        if (!lesson) {
            throw new common_1.ForbiddenException('Lesson not found');
        }
        if (lesson.teacherId !== admin.id) {
            throw new common_1.ForbiddenException("Siz faqat o'zingizga tegishli darsni tahrirlashingiz mumkin");
        }
        return true;
    }
};
exports.TeacherOwnsLessonOrAdminGuard = TeacherOwnsLessonOrAdminGuard;
exports.TeacherOwnsLessonOrAdminGuard = TeacherOwnsLessonOrAdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherOwnsLessonOrAdminGuard);
//# sourceMappingURL=jwtTeacher-ownlessons.guard.js.map