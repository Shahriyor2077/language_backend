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
exports.LessonTemplateController = void 0;
const common_1 = require("@nestjs/common");
const lesson_template_service_1 = require("./lesson-template.service");
const create_lesson_template_dto_1 = require("./dto/create-lesson-template.dto");
const update_lesson_template_dto_1 = require("./dto/update-lesson-template.dto");
const swagger_1 = require("@nestjs/swagger");
const jwtUser_auth_guard_1 = require("../common/guards/user/jwtUser-auth.guard");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const jwtRoles_guard_1 = require("../common/guards/jwtRoles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const jwtTeacherSelf_superAdmin_guard_1 = require("../common/guards/user/jwtTeacherSelf-superAdmin.guard");
let LessonTemplateController = class LessonTemplateController {
    lessonTemplateService;
    constructor(lessonTemplateService) {
        this.lessonTemplateService = lessonTemplateService;
    }
    create(dto) {
        return this.lessonTemplateService.create(dto);
    }
    findAll(page = 1, limit = 10) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const startIndex = (pageNum - 1) * limitNum;
        const endIndex = startIndex + limitNum;
        return this.lessonTemplateService.findAll().then((res) => {
            const paginatedTemplates = res.templates.slice(startIndex, endIndex);
            return {
                statusCode: 200,
                message: 'Lesson templates retrieved successfully',
                count: res.count,
                page: pageNum,
                limit: limitNum,
                templates: paginatedTemplates,
            };
        });
    }
    findOne(id) {
        return this.lessonTemplateService.findOne(id);
    }
    update(id, dto) {
        return this.lessonTemplateService.update(id, dto);
    }
    remove(id) {
        return this.lessonTemplateService.remove(id);
    }
};
exports.LessonTemplateController = LessonTemplateController;
__decorate([
    (0, common_1.UseGuards)(jwtUser_auth_guard_1.TeacherAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create lesson template' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Lesson template created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lesson_template_dto_1.CreateLessonTemplateDto]),
    __metadata("design:returntype", void 0)
], LessonTemplateController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get all lesson templates' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lesson templates retrieved successfully' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LessonTemplateController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get lesson template by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson template not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonTemplateController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update lesson template' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lesson_template_dto_1.UpdateLessonTemplateDto]),
    __metadata("design:returntype", void 0)
], LessonTemplateController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete lesson template' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson template not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonTemplateController.prototype, "remove", null);
exports.LessonTemplateController = LessonTemplateController = __decorate([
    (0, swagger_1.ApiTags)('Lesson Template'),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.Controller)('lesson-template'),
    __metadata("design:paramtypes", [lesson_template_service_1.LessonTemplateService])
], LessonTemplateController);
//# sourceMappingURL=lesson-template.controller.js.map