import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class TeacherSelfOrSuperAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
