import { LessonHistoryService } from './lesson-history.service';
import { CreateLessonHistoryDto } from './dto/create-lesson-history.dto';
import { UpdateLessonHistoryDto } from './dto/update-lesson-history.dto';
export declare class LessonHistoryController {
    private readonly lessonHistoryService;
    constructor(lessonHistoryService: LessonHistoryService);
    create(dto: CreateLessonHistoryDto): Promise<{
        statusCode: number;
        message: string;
        history: {
            teacher: {
                id: string;
                fullName: string;
            };
            student: {
                id: string;
                lastName: string;
                firstName: string;
            };
            lesson: {
                id: string;
                name: string;
                startTime: Date;
                endTime: Date;
            };
        } & {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            studentId: string;
            lessonId: string;
            star: number;
            feedback: string | null;
        };
    }>;
    findAll(page?: number, limit?: number): Promise<{
        statusCode: number;
        message: string;
        count: number;
        page: number;
        limit: number;
        histories: ({
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
            student: {
                id: string;
                role: string;
                phoneNumber: string;
                isActive: boolean;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                lastName: string;
                firstName: string;
                tgId: string;
                tgUsername: string | null;
                isBlocked: boolean;
                blockedAt: Date | null;
                blockedReason: string | null;
            };
            lesson: {
                id: string;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                teacherId: string;
                name: string;
                startTime: Date;
                endTime: Date;
                studentId: string | null;
                googleMeetsUrl: string;
                status: import("../../generated/prisma/enums").LessonStatus;
                googleEventId: string | null;
                price: import("@prisma/client/runtime/library").Decimal;
                isPaid: boolean;
                bookedAt: Date | null;
                remainedLessonId: string | null;
                completedAt: Date | null;
            };
        } & {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            studentId: string;
            lessonId: string;
            star: number;
            feedback: string | null;
        })[];
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        history: {
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
            student: {
                id: string;
                role: string;
                phoneNumber: string;
                isActive: boolean;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                lastName: string;
                firstName: string;
                tgId: string;
                tgUsername: string | null;
                isBlocked: boolean;
                blockedAt: Date | null;
                blockedReason: string | null;
            };
            lesson: {
                id: string;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                teacherId: string;
                name: string;
                startTime: Date;
                endTime: Date;
                studentId: string | null;
                googleMeetsUrl: string;
                status: import("../../generated/prisma/enums").LessonStatus;
                googleEventId: string | null;
                price: import("@prisma/client/runtime/library").Decimal;
                isPaid: boolean;
                bookedAt: Date | null;
                remainedLessonId: string | null;
                completedAt: Date | null;
            };
        } & {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            studentId: string;
            lessonId: string;
            star: number;
            feedback: string | null;
        };
    }>;
    update(id: string, dto: UpdateLessonHistoryDto): Promise<{
        statusCode: number;
        message: string;
        history: {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            studentId: string;
            lessonId: string;
            star: number;
            feedback: string | null;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        history: {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            teacherId: string;
            studentId: string;
            lessonId: string;
            star: number;
            feedback: string | null;
        };
    }>;
}
