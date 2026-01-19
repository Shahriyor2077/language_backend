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
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const lesson_service_1 = require("../lesson/lesson.service");
const lesson_history_service_1 = require("../lesson-history/lesson-history.service");
let BotService = class BotService {
    prismaService;
    lessonService;
    histroryService;
    constructor(prismaService, lessonService, histroryService) {
        this.prismaService = prismaService;
        this.lessonService = lessonService;
        this.histroryService = histroryService;
    }
    async registerStudent(dto) {
        const { tgId, firstName, lastName, tgUsername, phoneNumber } = dto;
        return this.prismaService.student.create({
            data: {
                tgId: tgId.toString(),
                firstName,
                lastName: lastName || '',
                tgUsername,
                phoneNumber: phoneNumber,
            },
        });
    }
    async getStudentByTgId(tgId) {
        return this.prismaService.student.findUnique({
            where: { tgId: tgId.toString() },
        });
    }
    async getStudentLessons(tgId) {
        const student = await this.prismaService.student.findUnique({
            where: { tgId: tgId.toString() },
        });
        const stId = student?.id;
        if (!stId) {
            throw new common_1.NotFoundException('Student not found');
        }
        return this.lessonService.findAllbyStudent(stId);
    }
    async getStudentHistoryLessons(tgId) {
        const student = await this.prismaService.student.findUnique({
            where: { tgId: tgId.toString() },
        });
        const stId = student?.id;
        if (!stId) {
            throw new common_1.NotFoundException('Student not found');
        }
        return this.histroryService.getLessonsHistoryByStId(stId);
    }
};
exports.BotService = BotService;
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        lesson_service_1.LessonService,
        lesson_history_service_1.LessonHistoryService])
], BotService);
//# sourceMappingURL=bot.service.js.map