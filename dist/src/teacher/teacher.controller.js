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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const create_teacher_dto_1 = require("./dto/create-teacher.dto");
const update_teacher_dto_1 = require("./dto/update-teacher.dto");
const updatePassword_dto_1 = require("./dto/updatePassword.dto");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const jwtRoles_guard_1 = require("../common/guards/jwtRoles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const jwtTeacherSelf_superAdmin_guard_1 = require("../common/guards/user/jwtTeacherSelf-superAdmin.guard");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("../config/multer.config");
let TeacherController = class TeacherController {
    teacherService;
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    create(createTeacherDto) {
        return this.teacherService.create(createTeacherDto);
    }
    findAll() {
        return this.teacherService.findAll();
    }
    findOne(id) {
        return this.teacherService.findOne(id);
    }
    update(id, updateTeacherDto) {
        return this.teacherService.update(id, updateTeacherDto);
    }
    remove(id) {
        return this.teacherService.remove(id);
    }
    updatePassword(id, dto) {
        return this.teacherService.updatePassword(id, dto);
    }
    uploadImage(id, file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        return this.teacherService.uploadImage(id, file.filename);
    }
    deleteImage(id) {
        return this.teacherService.deleteImage(id);
    }
};
exports.TeacherController = TeacherController;
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new teacher' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The teacher has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request. Invalid input data.',
    }),
    (0, swagger_1.ApiBody)({ type: create_teacher_dto_1.CreateTeacherDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all teachers' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all teachers successfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized. Admin access required.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden. Insufficient permissions.',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a teacher by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the teacher successfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Teacher not found.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a teacher' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The teacher has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request. Invalid input data.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Teacher not found.',
    }),
    (0, swagger_1.ApiBody)({ type: update_teacher_dto_1.UpdateTeacherDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a teacher' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The teacher has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Teacher not found.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, common_1.Patch)(':id/update-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Update teacher password' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Password has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request. Invalid input data.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Teacher not found.',
    }),
    (0, swagger_1.ApiBody)({ type: updatePassword_dto_1.UpdatePasswordDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePassword_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Patch)(':id/upload-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Delete)(':id/delete-image'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "deleteImage", null);
exports.TeacherController = TeacherController = __decorate([
    (0, swagger_1.ApiTags)('teacher'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('teacher'),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map