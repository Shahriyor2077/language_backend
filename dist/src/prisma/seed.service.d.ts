import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class SeedService implements OnModuleInit {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    onModuleInit(): Promise<void>;
    private createSuperAdmin;
}
