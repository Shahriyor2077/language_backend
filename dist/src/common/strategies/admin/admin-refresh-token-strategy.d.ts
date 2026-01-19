import { Request } from 'express';
import { JwtFromRequestFunction, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { JwtPayload } from '../../types/admin/admin.payload.types';
import { JwtPayloadWithRefreshTokenAdmin } from '../../types/admin/admin.ref.types';
export declare const cookieExtractor: JwtFromRequestFunction;
declare const AdminRefreshTokenStrategy_base: new (...args: [opt: StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class AdminRefreshTokenStrategy extends AdminRefreshTokenStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRefreshTokenAdmin;
}
export {};
