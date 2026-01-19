import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonTemplateDto } from './dto/create-lesson-template.dto';
import { UpdateLessonTemplateDto } from './dto/update-lesson-template.dto';
export declare class LessonTemplateService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLessonTemplateDto): Promise<{
        statusCode: number;
        message: string;
        template: {
            id: string;
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            name: string;
            timeSlot: string;
        };
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        count: number;
        templates: ({
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
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            name: string;
            timeSlot: string;
        })[];
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        template: {
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
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            name: string;
            timeSlot: string;
        };
    }>;
    update(id: string, dto: UpdateLessonTemplateDto): Promise<{
        statusCode: number;
        message: string;
        template: {
            id: string;
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            name: string;
            timeSlot: string;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        template: {
            id: string;
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            name: string;
            timeSlot: string;
        };
    }>;
}
