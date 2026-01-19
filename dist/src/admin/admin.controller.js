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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const admin_query_dto_1 = require("./dto/admin-query.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
const login_admin_dto_1 = require("./dto/login-admin.dto");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const jwtRoles_guard_1 = require("../common/guards/jwtRoles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const jwtAdminSelf_superAdmin_guard_1 = require("../common/guards/jwtAdminSelf-superAdmin.guard");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    create(dto) {
        return this.adminService.create(dto);
    }
    findAll(query) {
        return this.adminService.findAll(query);
    }
    async findOne(id) {
        const admin = await this.adminService.findOne(id);
        return {
            message: 'Admin found',
            data: admin,
        };
    }
    update(id, dto) {
        return this.adminService.update(id, dto);
    }
    changePassword(id, dto) {
        return this.adminService.changePassword(id, dto);
    }
    login(dto) {
        return this.adminService.validateAdmin(dto);
    }
    activate(id) {
        return this.adminService.activate(id);
    }
    deactivate(id) {
        return this.adminService.deactivate(id);
    }
    remove(id) {
        return this.adminService.remove(id);
    }
    restore(id) {
        return this.adminService.restore(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('superAdmin'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create admin' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get admins list' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_query_dto_1.AdminQueryDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtAdminSelf_superAdmin_guard_1.AdminSelfOrSuperAdminGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtAdminSelf_superAdmin_guard_1.AdminSelfOrSuperAdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update admin' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtAdminSelf_superAdmin_guard_1.AdminSelfOrSuperAdminGuard),
    (0, common_1.Patch)(':id/change-password'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Change admin password' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Admin login (validate)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_admin_dto_1.LoginAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('superAdmin'),
    (0, common_1.Patch)(':id/activate'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Activate admin' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "activate", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('superAdmin'),
    (0, common_1.Patch)(':id/deactivate'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Deactivate admin' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deactivate", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('superAdmin'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete admin' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('superAdmin'),
    (0, common_1.Patch)(':id/restore'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Restore deleted admin' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "restore", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map