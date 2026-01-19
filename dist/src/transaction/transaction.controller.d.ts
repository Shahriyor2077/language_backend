import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { FindTransactionsDto } from './dto/find-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createTransactionDto: CreateTransactionDto): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
    findAll(query: FindTransactionsDto): Promise<{
        data: ({
            student: {
                id: string;
                phoneNumber: string;
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
            reason: string | null;
            studentId: string;
            status: import("../../generated/prisma/enums").TransactionStatus;
            price: import("@prisma/client/runtime/library").Decimal;
            lessonId: string;
            canceledTime: Date | null;
            performedTime: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getStudentTransactions(studentId: string): Promise<({
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
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    })[]>;
    getLessonTransactions(lessonId: string): Promise<({
        student: {
            id: string;
            phoneNumber: string;
            lastName: string;
            firstName: string;
        };
    } & {
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        student: {
            id: string;
            phoneNumber: string;
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
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
    update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
    cancelTransaction(id: string, reason?: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
    completeTransaction(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        studentId: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        price: import("@prisma/client/runtime/library").Decimal;
        lessonId: string;
        canceledTime: Date | null;
        performedTime: Date | null;
    }>;
}
