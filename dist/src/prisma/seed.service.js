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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
let SeedService = class SeedService {
    prisma;
    config;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async onModuleInit() {
        await this.createSuperAdmin();
    }
    async createSuperAdmin() {
        try {
            const username = this.config.get('SUPER_ADMIN_USERNAME');
            const password = this.config.get('SUPER_ADMIN_PASSWORD');
            const phone = this.config.get('SUPER_ADMIN_PHONE');
            if (!username || !password || !phone)
                return;
            const exists = await this.prisma.admin.findFirst({
                where: { role: 'superAdmin', isDeleted: false },
            });
            if (!exists) {
                const hashedPassword = await bcrypt.hash(password, 10);
                await this.prisma.admin.create({
                    data: {
                        username,
                        password: hashedPassword,
                        role: 'superAdmin',
                        phoneNumber: phone,
                        isActive: true,
                    },
                });
                console.log('✅ SuperAdmin created from SeedService');
            }
        }
        catch (error) {
            console.error('❌ Seeding failed:', error.message);
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], SeedService);
//# sourceMappingURL=seed.service.js.map