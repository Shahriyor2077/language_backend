import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AccessTokenStrategy } from '../common/strategies/access-token-strategy';
// import { RefreshTokenCookieStrategy } from '../common/strategies/refresh-token-strategy';
import { AdminAccessTokenStrategy } from '../common/strategies/admin/admin-access-token-strategy';
import { AdminRefreshTokenStrategy } from '../common/strategies/admin/admin-refresh-token-strategy';

@Module({
  imports: [JwtModule.register({}), PrismaModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminAccessTokenStrategy,
    AdminRefreshTokenStrategy
    // RefreshTokenCookieStrategy,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
