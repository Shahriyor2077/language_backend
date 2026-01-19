"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const admin_response_dto_1 = require("./dto/admin-response.dto");
const bcrypt = require("bcrypt");
const client_1 = require("../../generated/prisma/client");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.admin.findFirst({
            where: {
                OR: [{ username: dto?.username }, { phoneNumber: dto?.phoneNumber }],
            },
        });
        if (exists) {
            throw new common_1.ConflictException(exists.username === dto.username
                ? 'Username already exists'
                : 'Phone number already exists');
        }
        if (dto.role === client_1.AdminRole.superAdmin) {
            const superAdminExists = await this.prisma.admin.findFirst({
                where: { role: client_1.AdminRole.superAdmin, isDeleted: false },
            });
            if (superAdminExists) {
                throw new common_1.BadRequestException('SuperAdmin already exists. Only one SuperAdmin is allowed.');
            }
        }
        const password = await bcrypt.hash(dto.password, 10);
        const admin = await this.prisma.admin.create({
            data: {
                username: dto.username,
                password,
                role: dto.role,
                phoneNumber: dto.phoneNumber,
                isActive: dto.isActive ?? true,
            },
        });
        console.log(admin);
        return new admin_response_dto_1.AdminResponseDto(admin);
    }
    async findAll(query) {
        const { page = 1, limit = 10, search, role, isActive } = query;
        const skip = (page - 1) * limit;
        const where = {
            isDeleted: false,
        };
        if (search) {
            where.OR = [
                { username: { contains: search, mode: 'insensitive' } },
                { phoneNumber: { contains: search } },
            ];
        }
        if (role)
            where.role = role;
        if (isActive !== undefined)
            where.isActive = isActive;
        const [data, total] = await Promise.all([
            this.prisma.admin.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.admin.count({ where }),
        ]);
        return {
            data: data.map((a) => new admin_response_dto_1.AdminResponseDto(a)),
            meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
        };
    }
    async findOne(id) {
        const admin = await this.prisma.admin.findFirst({
            where: { id, isDeleted: false },
        });
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return new admin_response_dto_1.AdminResponseDto(admin);
    }
    async update(id, dto) {
        const admin = await this.prisma.admin.findFirst({
            where: { id, isDeleted: false },
        });
        if (!admin)
            throw new common_1.NotFoundException('Admin not found');
        if (admin.role === client_1.AdminRole.superAdmin && dto.role === client_1.AdminRole.admin) {
            const count = await this.prisma.admin.count({
                where: { role: client_1.AdminRole.superAdmin, isDeleted: false },
            });
            if (count <= 1) {
                throw new common_1.BadRequestException('Cannot downgrade last super admin');
            }
        }
        if (dto.newPassword) {
            dto['password'] = await bcrypt.hash(dto.newPassword, 10);
            delete dto.newPassword;
        }
        const updated = await this.prisma.admin.update({
            where: { id },
            data: dto,
        });
        return new admin_response_dto_1.AdminResponseDto(updated);
    }
    async remove(id) {
        const admin = await this.prisma.admin.findUnique({ where: { id } });
        if (!admin)
            throw new common_1.NotFoundException();
        if (admin.role === client_1.AdminRole.superAdmin) {
            const count = await this.prisma.admin.count({
                where: { role: client_1.AdminRole.superAdmin, isDeleted: false },
            });
            if (count <= 1) {
                throw new common_1.BadRequestException('Last super admin');
            }
        }
        await this.prisma.admin.update({
            where: { id },
            data: { isDeleted: true, deletedAt: new Date() },
        });
    }
    async restore(id) {
        const admin = await this.prisma.admin.findUnique({ where: { id } });
        if (!admin)
            throw new common_1.NotFoundException();
        const restored = await this.prisma.admin.update({
            where: { id },
            data: { isDeleted: false, deletedAt: null },
        });
        return new admin_response_dto_1.AdminResponseDto(restored);
    }
    async activate(id) {
        return this.prisma.admin.update({
            where: { id },
            data: { isActive: true },
        });
    }
    async deactivate(id) {
        return this.prisma.admin.update({
            where: { id },
            data: { isActive: false },
        });
    }
    async validateAdmin(dto) {
        const admin = await this.prisma.admin.findFirst({
            where: { username: dto.username, isDeleted: false },
        });
        if (!admin || !admin.isActive)
            return null;
        const ok = await bcrypt.compare(dto.password, admin.password);
        if (!ok)
            return null;
        return admin;
    }
    async changePassword(id, dto) {
        const admin = await this.prisma.admin.findFirst({
            where: { id, isDeleted: false },
        });
        if (!admin)
            throw new common_1.NotFoundException('Admin not found');
        const valid = await bcrypt.compare(dto.currentPassword, admin.password);
        if (!valid)
            throw new common_1.UnauthorizedException('Wrong password');
        if (dto.newPassword !== dto.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const password = await bcrypt.hash(dto.newPassword, 10);
        const updated = await this.prisma.admin.update({
            where: { id },
            data: { password },
        });
        return new admin_response_dto_1.AdminResponseDto(updated);
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map