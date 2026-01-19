import { TransactionStatus } from '../../../generated/prisma/enums';
export declare class TransactionResponseDto {
    id: string;
    lessonId: string;
    studentId: string;
    price: number;
    status: TransactionStatus;
    canceledTime: Date | null;
    performedTime: Date | null;
    reason: string | null;
    createdAt: Date;
    updatedAt: Date;
}
