import { Strategy, StrategyOptionsWithRequest } from "passport-jwt";
import { JwtPayload } from "../../types/admin/admin.payload.types";
declare const AdminAccessTokenStrategy_base: new (...args: [opt: StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class AdminAccessTokenStrategy extends AdminAccessTokenStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayload;
}
export {};
