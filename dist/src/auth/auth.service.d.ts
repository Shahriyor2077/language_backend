import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { UpdateAdminProfileDto, UpdateTeacherProfileDto } from './dto/update-profile.dto';
import { Tokens } from '../common/types/tokens.type';
import { Response } from 'express';
import { SmsService } from '../common/services/sms.service';
import { TeacherService } from '../teacher/teacher.service';
export interface GoogleUser {
    googleId: string;
    email: string;
    fullName: string;
    imageUrl?: string;
    googleAccessToken?: string;
    googleRefreshToken?: string;
}
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly smsService;
    private readonly teacherService;
    constructor(prisma: PrismaService, jwtService: JwtService, smsService: SmsService, teacherService: TeacherService);
    loginAdmin(dto: LoginDto, res: Response): Promise<{
        message: string;
        id: string;
        role: string;
        accessToken: string;
        refreshToken: string;
    }>;
    logoutAdmin(res: Response): Promise<{
        message: string;
    }>;
    refreshAdminToken(refreshToken: string, res: Response): Promise<{
        message: string;
        accessToken: string;
    }>;
    getAdminProfile(adminId: string): Promise<{
        id: string;
        username: string;
        role: import("../../generated/prisma/enums").AdminRole;
        phoneNumber: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAdminProfile(adminId: string, dto: UpdateAdminProfileDto): Promise<{
        message: string;
        admin: {
            id: string;
            username: string;
            role: import("../../generated/prisma/enums").AdminRole;
            phoneNumber: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    loginTeacher(dto: LoginDto, res: Response): Promise<{
        message: string;
        id: string;
        role: string;
        accessToken: string;
    }>;
    logoutTeacher(res: Response): Promise<{
        message: string;
    }>;
    refreshTeacherToken(refreshToken: string, res: Response): Promise<{
        message: string;
        accessToken: string;
    }>;
    getTeacherProfile(teacherId: string): Promise<{
        message: string;
        teacher: {
            id: string;
            phoneNumber: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string;
            cardNumber: string;
            specification: import("../../generated/prisma/enums").TeacherSpecialty;
            level: import("../../generated/prisma/enums").TeacherLevel;
            description: string | null;
            hourPrice: number | null;
            portfolioLink: string | null;
            imageUrl: string | null;
            rating: number | null;
            experience: string | null;
            lessons: {
                id: string;
                status: import("../../generated/prisma/enums").LessonStatus;
            }[];
        };
    }>;
    updateTeacherProfile(teacherId: string, dto: UpdateTeacherProfileDto): Promise<{
        message: string;
        teacher: {
            id: string;
            phoneNumber: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string;
            specification: import("../../generated/prisma/enums").TeacherSpecialty;
            level: import("../../generated/prisma/enums").TeacherLevel;
            description: string | null;
            hourPrice: number | null;
            portfolioLink: string | null;
            imageUrl: string | null;
            rating: number | null;
            experience: string | null;
        };
    }>;
    private generateAdminTokens;
    private generateTeacherTokens;
    private setRefreshTokenCookie;
    googleLogin(googleUser: GoogleUser, res: Response): Promise<{
        redirectUrl: string;
        teacher: {
            id: string;
            password: string;
            role: string;
            phoneNumber: string;
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string;
            cardNumber: string;
            specification: import("../../generated/prisma/enums").TeacherSpecialty;
            level: import("../../generated/prisma/enums").TeacherLevel;
            description: string | null;
            hourPrice: number | null;
            portfolioLink: string | null;
            imageUrl: string | null;
            googleId: string;
            googleRefreshToken: string | null;
            googleAccessToken: string | null;
            rating: number | null;
            experience: string | null;
        };
        tokens: Tokens;
    }>;
    sendOtp(phoneNumber: string, teacherId: string, password: string, confirmPassword: string): Promise<{
        message: string;
        phoneNumber: string;
        expiresIn: number;
    }>;
    verifyOtp(phoneNumber: string, otp: string, res: Response): Promise<{
        message: string;
        id: string;
        email: string;
        fullName: string;
        phoneNumber: string;
        accessToken: string;
    }>;
    resendOtp(phoneNumber: string, teacherId: string): Promise<{
        message: string;
        phoneNumber: string;
        expiresIn: number;
    }>;
}
