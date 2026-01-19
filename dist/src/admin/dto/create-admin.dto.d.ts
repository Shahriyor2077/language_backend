import { AdminRole } from '../../../generated/prisma/client';
export declare class CreateAdminDto {
    username: string;
    password: string;
    role: AdminRole;
    phoneNumber: string;
    isActive?: boolean;
}
