import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AdminSelfOrSuperAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
