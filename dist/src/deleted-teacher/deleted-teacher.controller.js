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
exports.DeletedTeacherController = void 0;
const common_1 = require("@nestjs/common");
const deleted_teacher_service_1 = require("./deleted-teacher.service");
const create_deleted_teacher_dto_1 = require("./dto/create-deleted-teacher.dto");
const update_deleted_teacher_dto_1 = require("./dto/update-deleted-teacher.dto");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let DeletedTeacherController = class DeletedTeacherController {
    deletedTeacherService;
    constructor(deletedTeacherService) {
        this.deletedTeacherService = deletedTeacherService;
    }
    create(createDeletedTeacherDto) {
        return this.deletedTeacherService.create(createDeletedTeacherDto);
    }
    findAll() {
        return this.deletedTeacherService.findAll();
    }
    findOne(id) {
        return this.deletedTeacherService.findOne(id);
    }
    update(id, updateDeletedTeacherDto) {
        return this.deletedTeacherService.update(id, updateDeletedTeacherDto);
    }
    remove(id) {
        return this.deletedTeacherService.remove(id);
    }
};
exports.DeletedTeacherController = DeletedTeacherController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a deleted teacher record',
        description: 'Creates a record in the deleted teachers archive. Requires admin privileges.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_deleted_teacher_dto_1.CreateDeletedTeacherDto,
        description: 'Data for creating a deleted teacher record',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Deleted teacher record created successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Admin access required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Insufficient permissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'Conflict - Record already exists',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deleted_teacher_dto_1.CreateDeletedTeacherDto]),
    __metadata("design:returntype", void 0)
], DeletedTeacherController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all deleted teacher records',
        description: 'Retrieves all archived/deleted teacher records. Requires admin privileges.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Returns all deleted teacher records',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Admin access required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Insufficient permissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'No deleted teacher records found',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeletedTeacherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a specific deleted teacher record',
        description: 'Retrieves a single deleted teacher record by ID. Requires admin privileges.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the deleted teacher record',
        type: String,
        required: true,
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Returns the deleted teacher record',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid ID format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Admin access required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Insufficient permissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Deleted teacher record not found',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeletedTeacherController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a deleted teacher record',
        description: 'Updates an existing deleted teacher record. Requires admin privileges.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the deleted teacher record to update',
        type: String,
        required: true,
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiBody)({
        type: update_deleted_teacher_dto_1.UpdateDeletedTeacherDto,
        description: 'Data to update the deleted teacher record',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Deleted teacher record updated successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data or ID format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Admin access required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Insufficient permissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Deleted teacher record not found',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_deleted_teacher_dto_1.UpdateDeletedTeacherDto]),
    __metadata("design:returntype", void 0)
], DeletedTeacherController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Permanently delete a record',
        description: 'Permanently deletes a record from the deleted teachers archive. This action cannot be undone. Requires admin privileges.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the deleted teacher record to permanently delete',
        type: String,
        required: true,
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Record permanently deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid ID format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Admin access required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Insufficient permissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Deleted teacher record not found',
    }),
    (0, swagger_1.ApiSecurity)('JWT-admin-auth'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeletedTeacherController.prototype, "remove", null);
exports.DeletedTeacherController = DeletedTeacherController = __decorate([
    (0, swagger_1.ApiTags)('Deleted Teacher Management'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Controller)('deleted-teacher'),
    __metadata("design:paramtypes", [deleted_teacher_service_1.DeletedTeacherService])
], DeletedTeacherController);
//# sourceMappingURL=deleted-teacher.controller.js.map