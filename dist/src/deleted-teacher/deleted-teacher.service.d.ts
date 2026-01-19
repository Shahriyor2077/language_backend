import { CreateDeletedTeacherDto } from './dto/create-deleted-teacher.dto';
import { UpdateDeletedTeacherDto } from './dto/update-deleted-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class DeletedTeacherService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDeletedTeacherDto: CreateDeletedTeacherDto): Promise<{
        message: string;
        deletedTeacher: {
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
        } & {
            id: string;
            deletedAt: Date;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            deletedBy: string;
            reason: string;
            restoreAt: Date | null;
        };
    }>;
    findAll(page?: number, limit?: number, deletedBy?: string, startDate?: string, endDate?: string, hasRestoreDate?: boolean): Promise<{
        message: string;
        deletedTeachers: ({
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
        } & {
            id: string;
            deletedAt: Date;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            deletedBy: string;
            reason: string;
            restoreAt: Date | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        message: string;
        deletedTeacher: {
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
        } & {
            id: string;
            deletedAt: Date;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            deletedBy: string;
            reason: string;
            restoreAt: Date | null;
        };
    }>;
    update(id: string, updateDeletedTeacherDto: UpdateDeletedTeacherDto): Promise<{
        message: string;
        deletedTeacher: {
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
        } & {
            id: string;
            deletedAt: Date;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            deletedBy: string;
            reason: string;
            restoreAt: Date | null;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
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
    }>;
}
