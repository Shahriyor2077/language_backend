"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const teacher_module_1 = require("./teacher/teacher.module");
const teacher_payment_module_1 = require("./teacher-payment/teacher-payment.module");
const transaction_module_1 = require("./transaction/transaction.module");
const student_module_1 = require("./student/student.module");
const notification_module_1 = require("./notification/notification.module");
const lesson_template_module_1 = require("./lesson-template/lesson-template.module");
const lesson_history_module_1 = require("./lesson-history/lesson-history.module");
const lesson_module_1 = require("./lesson/lesson.module");
const deleted_teacher_module_1 = require("./deleted-teacher/deleted-teacher.module");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const google_strategy_1 = require("./common/strategies/google.strategy");
const LocalSession = require('telegraf-session-local');
const sessions = new LocalSession({
    database: 'session_db.json',
    property: 'session',
    getSessionKey: (ctx) => ctx.from?.id.toString(),
    ttl: 3600,
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.ACCESS_TOKEN_KEY || 'your-secret-key',
                signOptions: { expiresIn: '7d' },
            }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            prisma_module_1.PrismaModule,
            teacher_module_1.TeacherModule,
            teacher_payment_module_1.TeacherPaymentModule,
            transaction_module_1.TransactionModule,
            student_module_1.StudentModule,
            notification_module_1.NotificationModule,
            lesson_template_module_1.LessonTemplateModule,
            lesson_history_module_1.LessonHistoryModule,
            lesson_module_1.LessonModule,
            deleted_teacher_module_1.DeletedTeacherModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [google_strategy_1.GoogleStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map