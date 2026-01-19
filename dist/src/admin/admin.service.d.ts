import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../prisma/prisma.service';
import { AdminResponseDto } from './dto/admin-response.dto';
import { AdminQueryDto } from './dto/admin-query.dto';
import { AdminRole } from '../../generated/prisma/client';
import { LoginAdminDto } from './dto/login-admin.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAdminDto): Promise<AdminResponseDto>;
    findAll(query: AdminQueryDto): Promise<{
        data: AdminResponseDto[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    }>;
    findOne(id: string): Promise<AdminResponseDto>;
    update(id: string, dto: UpdateAdminDto): Promise<AdminResponseDto>;
    remove(id: string): Promise<void>;
    restore(id: string): Promise<AdminResponseDto>;
    activate(id: string): Promise<{
        id: string;
        username: string;
        password: string;
        role: AdminRole;
        phoneNumber: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deactivate(id: string): Promise<{
        id: string;
        username: string;
        password: string;
        role: AdminRole;
        phoneNumber: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateAdmin(dto: LoginAdminDto): Promise<{
        id: string;
        username: string;
        password: string;
        role: AdminRole;
        phoneNumber: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    changePassword(id: string, dto: ChangePasswordDto): Promise<AdminResponseDto>;
}
