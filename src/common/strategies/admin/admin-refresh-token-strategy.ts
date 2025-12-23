import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import {
  JwtFromRequestFunction,
  Strategy,
  StrategyOptionsWithRequest,
} from 'passport-jwt';
import { JwtPayload } from '../../types/admin/admin.payload.types';
import { JwtPayloadWithRefreshTokenAdmin } from '../../types/admin/admin.ref.types';

export const cookieExtractor: JwtFromRequestFunction = (req: Request) => {
  // console.log(req.cookies);
  if (req && req.cookies) {
    return req.cookies['refreshToken'];
  }
  return null;
};

@Injectable()
export class AdminRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'admin-refresh-jwt',
) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.ADMIN_REFRESH_TOKEN_KEY,
      passReqToCallback: true,
    } as StrategyOptionsWithRequest);
  }

  validate(req: Request, payload: JwtPayload): JwtPayloadWithRefreshTokenAdmin {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new ForbiddenException("Refresh token noto'gri");
    }

    return { ...payload, refreshToken };
  }
}
