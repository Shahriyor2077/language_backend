"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSelfOrSuperAdminGuard = void 0;
const common_1 = require("@nestjs/common");
let TeacherSelfOrSuperAdminGuard = class TeacherSelfOrSuperAdminGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const paramId = req.params.id;
        const admin = req.admin;
        if (admin.role === 'superAdmin' || admin.role === 'admin') {
            return true;
        }
        if (admin.role === 'teacher' && admin.id === paramId) {
            return true;
        }
        throw new common_1.ForbiddenException("Siz faqat o'z profilingizni tahrirlashingiz mumkin");
    }
};
exports.TeacherSelfOrSuperAdminGuard = TeacherSelfOrSuperAdminGuard;
exports.TeacherSelfOrSuperAdminGuard = TeacherSelfOrSuperAdminGuard = __decorate([
    (0, common_1.Injectable)()
], TeacherSelfOrSuperAdminGuard);
//# sourceMappingURL=jwtTeacherSelf-superAdmin.guard.js.map