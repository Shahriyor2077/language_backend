import { TransactionStatus } from '../../../generated/prisma/enums';
export declare class CreateTransactionDto {
    lessonId: string;
    studentId: string;
    price: number;
    status?: TransactionStatus;
    canceledTime?: string;
    performedTime?: string;
    reason?: string;
}
