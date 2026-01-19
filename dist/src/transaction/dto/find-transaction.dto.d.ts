import { TransactionStatus } from '../../../generated/prisma/enums';
export declare class FindTransactionsDto {
    lessonId?: string;
    studentId?: string;
    status?: TransactionStatus;
    page: number;
    limit: number;
    performedTimeFrom?: string;
    performedTimeTo?: string;
}
