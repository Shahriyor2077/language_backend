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
exports.TeacherPaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const teacher_payment_service_1 = require("./teacher-payment.service");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const jwtRoles_guard_1 = require("../common/guards/jwtRoles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const create_teacher_payment_dto_1 = require("./dto/create-teacher-payment.dto");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const jwtTeacherSelf_superAdmin_guard_1 = require("../common/guards/user/jwtTeacherSelf-superAdmin.guard");
const update_teacher_payment_dto_1 = require("./dto/update-teacher-payment.dto");
const cancel_teacher_payment_dto_1 = require("./dto/cancel-teacher-payment.dto");
let TeacherPaymentController = class TeacherPaymentController {
    teacherPaymentService;
    constructor(teacherPaymentService) {
        this.teacherPaymentService = teacherPaymentService;
    }
    create(dto) {
        return this.teacherPaymentService.create(dto);
    }
    findAll() {
        return this.teacherPaymentService.findAll();
    }
    getTeacherPaymentsByid(teacherId) {
        return this.teacherPaymentService.getTeacherPaymentsByid(teacherId);
    }
    findOne(id) {
        return this.teacherPaymentService.findOne(id);
    }
    update(id, dto) {
        return this.teacherPaymentService.update(id, dto);
    }
    remove(id) {
        return this.teacherPaymentService.remove(id);
    }
    cancelPayment(id, dto) {
        return this.teacherPaymentService.cancel(id, dto.canceledBy, dto.canceledReason);
    }
};
exports.TeacherPaymentController = TeacherPaymentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create teacher payment',
        description: 'Creates a payment record for a completed lesson. Only admins are allowed.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Teacher payment successfully created',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid payment data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Teacher or lesson not found' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Payment already exists for lesson',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_payment_dto_1.CreateTeacherPaymentDto]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all teacher payments',
        description: 'Returns paginated list of all teacher payments. Admin access only.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Teacher payments retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('teacher/:teacherId'),
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Get payments by teacher ID',
    }),
    (0, swagger_1.ApiParam)({
        name: 'teacherId',
        description: 'Teacher ID',
    }),
    __param(0, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "getTeacherPaymentsByid", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard, jwtTeacherSelf_superAdmin_guard_1.TeacherSelfOrSuperAdminGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Get payment by payment ID',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher payment ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update teacher payment',
        description: 'Updates payment details. Canceled payments cannot be updated.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher payment ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Teacher payment updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid update data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_payment_dto_1.UpdateTeacherPaymentDto]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete teacher payment',
        description: 'Soft deletes a teacher payment record.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Teacher payment deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({
        summary: 'Cancel teacher payment',
        description: 'Marks a payment as canceled and records cancellation details.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Teacher payment ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Teacher payment canceled successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Payment already canceled' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cancel_teacher_payment_dto_1.CancelTeacherPaymentDto]),
    __metadata("design:returntype", void 0)
], TeacherPaymentController.prototype, "cancelPayment", null);
exports.TeacherPaymentController = TeacherPaymentController = __decorate([
    (0, swagger_1.ApiTags)('Teacher Payments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('teacher-payments'),
    __metadata("design:paramtypes", [teacher_payment_service_1.TeacherPaymentService])
], TeacherPaymentController);
//# sourceMappingURL=teacher-payment.controller.js.map