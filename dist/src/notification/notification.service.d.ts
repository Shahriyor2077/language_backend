import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { FindNotificationsDto } from './dto/find-notification.dto';
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNotificationDto): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    findAll(query: FindNotificationsDto): Promise<{
        data: {
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            lessonId: string;
            message: string;
            sendAt: Date;
            isSend: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    update(id: string, dto: UpdateNotificationDto): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    restore(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    hardDelete(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
    markAsSent(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
    }>;
}
