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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const sms_service_1 = require("../common/services/sms.service");
const teacher_service_1 = require("../teacher/teacher.service");
const otpStore = new Map();
let AuthService = class AuthService {
    prisma;
    jwtService;
    smsService;
    teacherService;
    constructor(prisma, jwtService, smsService, teacherService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.smsService = smsService;
        this.teacherService = teacherService;
    }
    async loginAdmin(dto, res) {
        const envUsername = process.env.SUPER_ADMIN_USERNAME;
        const envPassword = process.env.SUPER_ADMIN_PASSWORD;
        if (dto.username === envUsername && dto.password === envPassword) {
            const payload = {
                id: 'env-superadmin',
                role: 'superAdmin',
                is_active: true,
            };
            const [accessToken, refreshToken] = await Promise.all([
                this.jwtService.signAsync(payload, {
                    secret: process.env.ADMIN_ACCESS_TOKEN_KEY,
                    expiresIn: 54000,
                }),
                this.jwtService.signAsync(payload, {
                    secret: process.env.ADMIN_REFRESH_TOKEN_KEY,
                    expiresIn: 1296000,
                }),
            ]);
            this.setRefreshTokenCookie(res, refreshToken, 'admin');
            return {
                message: 'Tizimga muvaffaqiyatli kirdingiz',
                id: 'env-superadmin',
                role: 'superAdmin',
                accessToken,
                refreshToken,
            };
        }
        const admin = await this.prisma.admin.findFirst({
            where: { username: dto.username, isDeleted: false },
        });
        if (!admin) {
            throw new common_1.UnauthorizedException("Username yoki parol noto'g'ri");
        }
        if (!admin.isActive) {
            throw new common_1.ForbiddenException('Akkaunt faol emas');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, admin.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Username yoki parol noto'g'ri");
        }
        const tokens = await this.generateAdminTokens(admin);
        this.setRefreshTokenCookie(res, tokens.refreshToken, 'admin');
        return {
            message: 'Tizimga muvaffaqiyatli kirdingiz',
            id: admin.id,
            role: admin.role,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        };
    }
    async logoutAdmin(res) {
        res.clearCookie('adminRefreshToken');
        return { message: 'Tizimdan muvaffaqiyatli chiqdingiz' };
    }
    async refreshAdminToken(refreshToken, res) {
        if (!refreshToken) {
            throw new common_1.ForbiddenException('Refresh token topilmadi');
        }
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: process.env.ADMIN_REFRESH_TOKEN_KEY,
            });
            const admin = await this.prisma.admin.findFirst({
                where: { id: payload.id, isDeleted: false, isActive: true },
            });
            if (!admin) {
                throw new common_1.ForbiddenException('Admin topilmadi');
            }
            const tokens = await this.generateAdminTokens(admin);
            this.setRefreshTokenCookie(res, tokens.refreshToken, 'admin');
            return {
                message: 'Token yangilandi',
                accessToken: tokens.accessToken,
            };
        }
        catch {
            throw new common_1.ForbiddenException('Refresh token yaroqsiz');
        }
    }
    async getAdminProfile(adminId) {
        const admin = await this.prisma.admin.findFirst({
            where: { id: adminId, isDeleted: false },
            select: {
                id: true,
                username: true,
                role: true,
                phoneNumber: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!admin) {
            throw new common_1.NotFoundException('Admin topilmadi');
        }
        return admin;
    }
    async updateAdminProfile(adminId, dto) {
        const admin = await this.prisma.admin.findFirst({
            where: { id: adminId, isDeleted: false },
        });
        if (!admin) {
            throw new common_1.NotFoundException('Admin topilmadi');
        }
        if (dto.username && dto.username !== admin.username) {
            const exists = await this.prisma.admin.findFirst({
                where: { username: dto.username, isDeleted: false },
            });
            if (exists) {
                throw new common_1.BadRequestException('Bu username allaqachon mavjud');
            }
        }
        if (dto.phoneNumber && dto.phoneNumber !== admin.phoneNumber) {
            const exists = await this.prisma.admin.findFirst({
                where: { phoneNumber: dto.phoneNumber, isDeleted: false },
            });
            if (exists) {
                throw new common_1.BadRequestException('Bu telefon raqam allaqachon mavjud');
            }
        }
        const updated = await this.prisma.admin.update({
            where: { id: adminId },
            data: dto,
            select: {
                id: true,
                username: true,
                role: true,
                phoneNumber: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            message: 'Profil yangilandi',
            admin: updated,
        };
    }
    async loginTeacher(dto, res) {
        const teacher = await this.prisma.teacher.findFirst({
            where: {
                OR: [{ email: dto.username }, { phoneNumber: dto.username }],
                isDeleted: false,
            },
        });
        if (!teacher) {
            throw new common_1.UnauthorizedException("Email/telefon yoki parol noto'g'ri");
        }
        if (!teacher.isActive) {
            throw new common_1.ForbiddenException('Akkaunt faol emas');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, teacher.password.trim());
        console.log('Dto password', dto.password);
        console.log('teacher password', teacher.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Email/telefon yoki parol noto'g'ri");
        }
        const tokens = await this.generateTeacherTokens(teacher);
        this.setRefreshTokenCookie(res, tokens.refreshToken, 'teacher');
        return {
            message: 'Tizimga muvaffaqiyatli kirdingiz',
            id: teacher.id,
            role: 'teacher',
            accessToken: tokens.accessToken,
        };
    }
    async logoutTeacher(res) {
        res.clearCookie('teacherRefreshToken');
        return { message: 'Tizimdan muvaffaqiyatli chiqdingiz' };
    }
    async refreshTeacherToken(refreshToken, res) {
        if (!refreshToken) {
            throw new common_1.ForbiddenException('Refresh token topilmadi');
        }
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            const teacher = await this.prisma.teacher.findFirst({
                where: { id: payload.id, isDeleted: false, isActive: true },
            });
            if (!teacher) {
                throw new common_1.ForbiddenException('Teacher topilmadi');
            }
            const tokens = await this.generateTeacherTokens(teacher);
            this.setRefreshTokenCookie(res, tokens.refreshToken, 'teacher');
            return {
                message: 'Token yangilandi',
                accessToken: tokens.accessToken,
            };
        }
        catch {
            throw new common_1.ForbiddenException('Refresh token yaroqsiz');
        }
    }
    async getTeacherProfile(teacherId) {
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: teacherId, isDeleted: false },
            select: {
                id: true,
                fullName: true,
                email: true,
                phoneNumber: true,
                specification: true,
                level: true,
                description: true,
                hourPrice: true,
                portfolioLink: true,
                imageUrl: true,
                rating: true,
                experience: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
                cardNumber: true,
                lessons: {
                    select: {
                        id: true,
                        status: true,
                    },
                },
            },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher topilmadi');
        }
        return {
            message: 'Muvaffaqiyatli olindi',
            teacher,
        };
    }
    async updateTeacherProfile(teacherId, dto) {
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: teacherId, isDeleted: false },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher topilmadi');
        }
        if (dto.phoneNumber && dto.phoneNumber !== teacher.phoneNumber) {
            const exists = await this.prisma.teacher.findFirst({
                where: { phoneNumber: dto.phoneNumber, isDeleted: false },
            });
            if (exists) {
                throw new common_1.BadRequestException('Bu telefon raqam allaqachon mavjud');
            }
        }
        const updated = await this.prisma.teacher.update({
            where: { id: teacherId },
            data: dto,
            select: {
                id: true,
                fullName: true,
                email: true,
                phoneNumber: true,
                specification: true,
                level: true,
                description: true,
                hourPrice: true,
                portfolioLink: true,
                imageUrl: true,
                rating: true,
                experience: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            message: 'Profil yangilandi',
            teacher: updated,
        };
    }
    async generateAdminTokens(admin) {
        const payload = {
            id: admin.id,
            role: admin.role,
            is_active: admin.isActive,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ADMIN_ACCESS_TOKEN_KEY,
                expiresIn: 54000,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.ADMIN_REFRESH_TOKEN_KEY,
                expiresIn: 1296000,
            }),
        ]);
        return { accessToken, refreshToken };
    }
    async generateTeacherTokens(teacher) {
        const payload = {
            id: teacher.id,
            role: teacher.role,
            is_active: teacher.isActive,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: 54000,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: 1296000,
            }),
        ]);
        return { accessToken, refreshToken };
    }
    setRefreshTokenCookie(res, token, type) {
        const cookieName = type === 'admin' ? 'adminRefreshToken' : 'teacherRefreshToken';
        const maxAge = type === 'admin'
            ? Number(process.env.ADMIN_COOKIE_TIME) || 1296000000
            : Number(process.env.COOKIE_TIME) || 1296000000;
        res.cookie(cookieName, token, {
            httpOnly: true,
            maxAge,
            sameSite: 'strict',
        });
    }
    async googleLogin(googleUser, res) {
        if (!googleUser) {
            throw new common_1.BadRequestException('Google autentifikatsiya muvaffaqiyatsiz');
        }
        let teacher = await this.prisma.teacher.findFirst({
            where: {
                OR: [{ googleId: googleUser.googleId }, { email: googleUser.email }],
                isDeleted: false,
            },
        });
        if (teacher) {
            teacher = await this.prisma.teacher.update({
                where: { id: teacher.id },
                data: {
                    googleId: googleUser.googleId,
                    googleAccessToken: googleUser.googleAccessToken,
                    googleRefreshToken: googleUser.googleRefreshToken,
                    imageUrl: googleUser.imageUrl || teacher.imageUrl,
                },
            });
            if (!teacher.isActive) {
                throw new common_1.ForbiddenException('Akkaunt faol emas');
            }
        }
        else {
            const tempPassword = 'temp_hashed_password';
            const random_card = Math.floor(10000 + Math.random() * 90000).toString();
            teacher = await this.prisma.teacher.create({
                data: {
                    googleId: googleUser.googleId,
                    email: googleUser.email,
                    fullName: googleUser.fullName,
                    imageUrl: googleUser.imageUrl,
                    googleAccessToken: googleUser.googleAccessToken,
                    googleRefreshToken: googleUser.googleRefreshToken,
                    password: tempPassword,
                    phoneNumber: `temp_${googleUser.googleId}`,
                    cardNumber: `card_${random_card}`,
                },
            });
        }
        console.log('Temp password has been applied');
        const tokens = await this.generateTeacherTokens(teacher);
        this.setRefreshTokenCookie(res, tokens.refreshToken, 'teacher');
        const isNewUser = !teacher.phoneNumber || teacher.phoneNumber.startsWith('temp_');
        const redirectUrl = new URL('http://localhost:5173/google-callback');
        redirectUrl.searchParams.append('accessToken', tokens.accessToken);
        redirectUrl.searchParams.append('isNewUser', isNewUser.toString());
        redirectUrl.searchParams.append('email', teacher.email);
        redirectUrl.searchParams.append('fullName', teacher.fullName);
        return { redirectUrl: redirectUrl.toString(), teacher, tokens };
    }
    async sendOtp(phoneNumber, teacherId, password, confirmPassword) {
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: teacherId, isDeleted: false },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher topilmadi');
        }
        const existingTeacher = await this.prisma.teacher.findFirst({
            where: {
                phoneNumber: phoneNumber,
                id: { not: teacherId },
                isDeleted: false,
            },
        });
        if (existingTeacher) {
            throw new common_1.BadRequestException("Bu telefon raqam allaqachon ro'yxatdan o'tgan");
        }
        if (password !== confirmPassword) {
            throw new common_1.BadRequestException('Parollar mos emas');
        }
        console.log('this is user input passowrd', confirmPassword);
        const hashedPassword = await bcrypt.hash(password, 7);
        await this.prisma.teacher.update({
            where: { id: teacherId },
            data: { password: hashedPassword },
        });
        console.log('password is hashed');
        const otp = this.smsService.generateOtp();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        otpStore.set(phoneNumber, { otp, expiresAt, teacherId });
        console.log('this is otp', otp);
        const sent = await this.smsService.sendOtp(phoneNumber, otp);
        if (!sent) {
            throw new common_1.BadRequestException('SMS yuborishda xatolik yuz berdi');
        }
        return {
            message: 'OTP kod yuborildi',
            phoneNumber,
            expiresIn: 300,
        };
    }
    async verifyOtp(phoneNumber, otp, res) {
        const stored = otpStore.get(phoneNumber);
        if (!stored) {
            throw new common_1.BadRequestException('OTP topilmadi yoki muddati tugagan');
        }
        if (new Date() > stored.expiresAt) {
            otpStore.delete(phoneNumber);
            throw new common_1.BadRequestException('OTP muddati tugagan');
        }
        if (stored.otp !== otp) {
            throw new common_1.BadRequestException("OTP noto'g'ri");
        }
        const teacher = await this.prisma.teacher.update({
            where: { id: stored.teacherId },
            data: { phoneNumber },
        });
        otpStore.delete(phoneNumber);
        const tokens = await this.generateTeacherTokens(teacher);
        this.setRefreshTokenCookie(res, tokens.refreshToken, 'teacher');
        return {
            message: 'Telefon raqam muvaffaqiyatli tasdiqlandi',
            id: teacher.id,
            email: teacher.email,
            fullName: teacher.fullName,
            phoneNumber: teacher.phoneNumber,
            accessToken: tokens.accessToken,
        };
    }
    async resendOtp(phoneNumber, teacherId) {
        otpStore.delete(phoneNumber);
        return this.sendOtp(phoneNumber, teacherId, '', '');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        sms_service_1.SmsService,
        teacher_service_1.TeacherService])
], AuthService);
//# sourceMappingURL=auth.service.js.map