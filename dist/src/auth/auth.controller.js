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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const otp_dto_1 = require("./dto/otp.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const auth_response_dto_1 = require("./dto/auth-response.dto");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const jwtAdmin_refreshToken_guard_1 = require("../common/guards/jwtAdmin-refreshToken.guard");
const jwtUser_refreshToken_guard_1 = require("../common/guards/user/jwtUser-refreshToken.guard");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const jwtAdminSelf_superAdmin_guard_1 = require("../common/guards/jwtAdminSelf-superAdmin.guard");
const google_auth_guard_1 = require("../common/guards/google-auth.guard");
const teacher_auth_guard_1 = require("../common/guards/teacher-auth.guard");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async loginAdmin(dto, res) {
        return this.authService.loginAdmin(dto, res);
    }
    async logoutAdmin(res) {
        return this.authService.logoutAdmin(res);
    }
    async refreshAdminToken(req, res) {
        const refreshToken = req.cookies?.adminRefreshToken;
        return this.authService.refreshAdminToken(refreshToken, res);
    }
    async getAdminProfile(req) {
        const user = req.user;
        return this.authService.getAdminProfile(user.id);
    }
    async updateAdminProfile(req, dto) {
        const user = req.user;
        return this.authService.updateAdminProfile(user.id, dto);
    }
    async loginTeacher(dto, res) {
        return this.authService.loginTeacher(dto, res);
    }
    async logoutTeacher(res) {
        return this.authService.logoutTeacher(res);
    }
    async refreshTeacherToken(req, res) {
        const refreshToken = req.cookies?.teacherRefreshToken;
        return this.authService.refreshTeacherToken(refreshToken, res);
    }
    async getTeacherProfile(req) {
        const user = req.user;
        return this.authService.getTeacherProfile(user.id);
    }
    async updateTeacherProfile(req, dto) {
        const user = req.user;
        return this.authService.updateTeacherProfile(user.id, dto);
    }
    async googleAuth() {
    }
    async googleCallback(req, res) {
        const result = await this.authService.googleLogin(req.user, res);
        return res.redirect(result.redirectUrl);
    }
    async sendOtp(req, dto) {
        const user = req.user;
        return this.authService.sendOtp(dto.phoneNumber, user.id, dto.password, dto.confirmPassword);
    }
    async verifyOtp(dto, res) {
        return this.authService.verifyOtp(dto.phoneNumber, dto.otp, res);
    }
    async resendOtp(req, dto) {
        const user = req.user;
        return this.authService.resendOtp(dto.phoneNumber, user.id);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('admin/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Admin login' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Account is not active' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_refreshToken_guard_1.AdminRefreshTokenGuard),
    (0, common_1.Post)('admin/logout'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Admin logout' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout successful',
        type: auth_response_dto_1.LogoutResponseDto,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_refreshToken_guard_1.AdminRefreshTokenGuard),
    (0, common_1.Post)('admin/refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh admin access token' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token refreshed',
        type: auth_response_dto_1.RefreshResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Invalid refresh token' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshAdminToken", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Get)('admin/me'),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current admin profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin profile' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAdminProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtAdminSelf_superAdmin_guard_1.AdminSelfOrSuperAdminGuard),
    (0, common_1.Patch)('admin/me'),
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update current admin profile' }),
    (0, swagger_1.ApiBody)({ type: update_profile_dto_1.UpdateAdminProfileDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile updated' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_profile_dto_1.UpdateAdminProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateAdminProfile", null);
__decorate([
    (0, common_1.Post)('teacher/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Teacher login (email or phone)' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Account is not active' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginTeacher", null);
__decorate([
    (0, common_1.UseGuards)(jwtUser_refreshToken_guard_1.UserRefreshTokenGuard),
    (0, common_1.Post)('teacher/logout'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Teacher logout' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout successful',
        type: auth_response_dto_1.LogoutResponseDto,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutTeacher", null);
__decorate([
    (0, common_1.UseGuards)(jwtUser_refreshToken_guard_1.UserRefreshTokenGuard),
    (0, common_1.Post)('teacher/refresh'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh teacher access token' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token refreshed',
        type: auth_response_dto_1.RefreshResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Invalid refresh token' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTeacherToken", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard),
    (0, common_1.Get)('teacher/me'),
    (0, common_1.UseGuards)(teacher_auth_guard_1.TeacherAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current teacher profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Teacher profile' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getTeacherProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard),
    (0, common_1.Patch)('teacher/me'),
    (0, common_1.UseGuards)(teacher_auth_guard_1.TeacherAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update current teacher profile' }),
    (0, swagger_1.ApiBody)({ type: update_profile_dto_1.UpdateTeacherProfileDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile updated' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_profile_dto_1.UpdateTeacherProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateTeacherProfile", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)(google_auth_guard_1.GoogleAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Google OAuth login - redirects to Google' }),
    (0, swagger_1.ApiResponse)({ status: 302, description: 'Redirects to Google OAuth' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)(google_auth_guard_1.GoogleAuthGuard),
    (0, swagger_1.ApiExcludeEndpoint)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleCallback", null);
__decorate([
    (0, common_1.Post)('teacher/send-otp'),
    (0, common_1.UseGuards)(teacher_auth_guard_1.TeacherAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Telefon raqamga OTP yuborish' }),
    (0, swagger_1.ApiBody)({ type: otp_dto_1.SendOtpDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OTP yuborildi' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Telefon raqam allaqachon mavjud' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, otp_dto_1.SendOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendOtp", null);
__decorate([
    (0, common_1.Post)('teacher/verify-otp'),
    (0, common_1.UseGuards)(teacher_auth_guard_1.TeacherAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'OTP kodni tasdiqlash' }),
    (0, swagger_1.ApiBody)({ type: otp_dto_1.VerifyOtpDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Telefon raqam tasdiqlandi' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: "OTP noto'g'ri yoki muddati tugagan",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_dto_1.VerifyOtpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)('teacher/resend-otp'),
    (0, common_1.UseGuards)(teacher_auth_guard_1.TeacherAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'OTP kodni qayta yuborish' }),
    (0, swagger_1.ApiBody)({ type: otp_dto_1.SendOtpDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OTP qayta yuborildi' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, otp_dto_1.SendOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendOtp", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map