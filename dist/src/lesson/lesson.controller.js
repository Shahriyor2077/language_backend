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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonController = void 0;
const common_1 = require("@nestjs/common");
const lesson_service_1 = require("./lesson.service");
const create_lesson_dto_1 = require("./dto/create-lesson.dto");
const update_lesson_dto_1 = require("./dto/update-lesson.dto");
const swagger_1 = require("@nestjs/swagger");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const jwtUser_auth_guard_1 = require("../common/guards/user/jwtUser-auth.guard");
const jwtTeacherSelf_superAdmin_guard_1 = require("../common/guards/user/jwtTeacherSelf-superAdmin.guard");
const jwtTeacherLessonCreate_guard_1 = require("../common/guards/user/jwtTeacherLessonCreate.guard");
const jwtTeacher_ownlessons_guard_1 = require("../common/guards/user/jwtTeacher-ownlessons.guard");
let LessonController = class LessonController {
    lessonService;
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    create(dto) {
        return this.lessonService.create(dto);
    }
    findAll(page = 1, limit = 10) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const startIndex = (pageNum - 1) * limitNum;
        const endIndex = startIndex + limitNum;
        return this.lessonService.findAll().then((res) => {
            const paginatedLessons = res.lessons.slice(startIndex, endIndex);
            return {
                statusCode: 200,
                message: 'Lessons retrieved successfully',
                count: res.count,
                page: pageNum,
                limit: limitNum,
                lessons: paginatedLessons,
            };
        });
    }
    findOne(id) {
        return this.lessonService.findOne(id);
    }
    update(id, dto) {
        return this.lessonService.update(id, dto);
    }
    remove(id) {
        return this.lessonService.remove(id);
    }
    findAllbyTeacher(id) {
        return this.lessonService.findAllbyTeacher(id);
    }
};
exports.LessonController = LessonController;
__decorate([
    (0, common_1.UseGuards)(jwtUser_auth_guard_1.TeacherAuthGuard, jwtTeacherLessonCreate_guard_1.TeacherLessonCreateGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create new lesson' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Lesson created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lesson_dto_1.CreateLessonDto]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get all lessons' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lessons retrieved successfully' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get lesson by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacher_ownlessons_guard_1.TeacherOwnsLessonOrAdminGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update lesson' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lesson_dto_1.UpdateLessonDto]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacher_ownlessons_guard_1.TeacherOwnsLessonOrAdminGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete lesson (soft delete)' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Get)(':id/teacher'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get lessons by id for teacher' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "findAllbyTeacher", null);
exports.LessonController = LessonController = __decorate([
    (0, swagger_1.ApiTags)('Lesson'),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.Controller)('lesson'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonController);
//# sourceMappingURL=lesson.controller.js.map