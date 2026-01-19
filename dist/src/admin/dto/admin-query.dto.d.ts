import { AdminRole } from '../../../generated/prisma/enums';
export declare class AdminQueryDto {
    page?: number;
    limit?: number;
    search?: string;
    role?: AdminRole;
    isActive?: boolean;
}
