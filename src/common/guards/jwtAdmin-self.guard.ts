import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IsSuperAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request | any = context.switchToHttp().getRequest();

    // console.log("this is req",req);
    console.log('this is admin ', req.admin);
    console.log('this is admin id', req.admin.id);
    console.log('this is admin role', req.admin.role);

    if (req.admin.role != 'superadmin') {
      throw new ForbiddenException('Bu route faqat superadmin uchun');
    }

    return true;
  }
}
