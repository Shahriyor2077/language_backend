import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminQueryDto } from './dto/admin-query.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(dto: CreateAdminDto): Promise<import("./dto/admin-response.dto").AdminResponseDto>;
    findAll(query: AdminQueryDto): Promise<{
        data: import("./dto/admin-response.dto").AdminResponseDto[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import("./dto/admin-response.dto").AdminResponseDto;
    }>;
    update(id: string, dto: UpdateAdminDto): Promise<import("./dto/admin-response.dto").AdminResponseDto>;
    changePassword(id: string, dto: ChangePasswordDto): Promise<import("./dto/admin-response.dto").AdminResponseDto>;
    login(dto: LoginAdminDto): Promise<{
        id: string;
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").AdminRole;
        phoneNumber: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    activate(id: string): Promise<{
        id: string;
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").AdminRole;
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
        role: import("../../generated/prisma/enums").AdminRole;
        phoneNumber: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<void>;
    restore(id: string): Promise<import("./dto/admin-response.dto").AdminResponseDto>;
}
