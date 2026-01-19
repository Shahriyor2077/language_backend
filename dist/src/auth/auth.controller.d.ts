import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SendOtpDto, VerifyOtpDto } from './dto/otp.dto';
import { UpdateAdminProfileDto, UpdateTeacherProfileDto } from './dto/update-profile.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    refreshAdminToken(req: Request, res: Response): Promise<{
        message: string;
        accessToken: string;
    }>;
    getAdminProfile(req: Request): Promise<{
        id: string;
        username: string;
        role: import("../../generated/prisma/enums").AdminRole;
        phoneNumber: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAdminProfile(req: Request, dto: UpdateAdminProfileDto): Promise<{
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
    refreshTeacherToken(req: Request, res: Response): Promise<{
        message: string;
        accessToken: string;
    }>;
    getTeacherProfile(req: Request): Promise<{
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
    updateTeacherProfile(req: Request, dto: UpdateTeacherProfileDto): Promise<{
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
    googleAuth(): Promise<void>;
    googleCallback(req: Request, res: Response): Promise<void>;
    sendOtp(req: Request, dto: SendOtpDto): Promise<{
        message: string;
        phoneNumber: string;
        expiresIn: number;
    }>;
    verifyOtp(dto: VerifyOtpDto, res: Response): Promise<{
        message: string;
        id: string;
        email: string;
        fullName: string;
        phoneNumber: string;
        accessToken: string;
    }>;
    resendOtp(req: Request, dto: SendOtpDto): Promise<{
        message: string;
        phoneNumber: string;
        expiresIn: number;
    }>;
}
