import {
  BadGatewayException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class TeacherAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request | any = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Unauthorized user');
    }

    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];

    if (bearer != 'Bearer' || !token) {
      throw new UnauthorizedException('Unauthorized user');
    }

    async function verify(token: string, jwtService: JwtService) {
      let payload: any;
      try {
        payload = await jwtService.verify(token, {
          secret: process.env.ACCESS_TOKEN_KEY,
        });
      } catch (error) {
        throw new BadGatewayException('Invalid token', error);
      }
      if (!payload) {
        throw new UnauthorizedException('Unathorized user');
      }

      if (!payload.is_active) {
        throw new UnauthorizedException(
          "You're not an active user! Please activate your accaunt",
        );
      }
      req.admin = payload;
      return true;
    }

    return verify(token, this.jwtService);
  }
}
