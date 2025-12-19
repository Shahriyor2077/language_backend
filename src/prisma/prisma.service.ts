// Compatible with Prisma 7.0.0 - 7.2.0+
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Create the adapter with your database connection string
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });

    // Pass the adapter to PrismaClient constructor (REQUIRED in Prisma 7)
    super({
      adapter,
      // Optional: add other configuration
      // log: ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
