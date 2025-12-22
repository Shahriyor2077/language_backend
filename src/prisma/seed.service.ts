// src/prisma/seed.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async onModuleInit() {
    await this.createSuperAdmin();
  }

  private async createSuperAdmin() {
    try {
      const username = this.config.get<string>('SUPER_ADMIN_USERNAME');
      const password = this.config.get<string>('SUPER_ADMIN_PASSWORD');
      const phone = this.config.get<string>('SUPER_ADMIN_PHONE');

      if (!username || !password || !phone) return;

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
    } catch (error) {
      console.error('❌ Seeding failed:', error.message);
    }
  }
}
