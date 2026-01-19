"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const bot_service_1 = require("./bot.service");
let BotUpdate = class BotUpdate {
    botService;
    constructor(botService) {
        this.botService = botService;
    }
    async onStart(ctx) {
        try {
            const student = await this.botService.getStudentByTgId(ctx.from?.id);
            if (!student) {
                await ctx.scene.enter('registration');
            }
            else {
                await ctx.replyWithHTML(`✅ <b>Xush kelibsiz, ${ctx.from?.first_name}!</b>

📚 Siz allaqachon ro'yxatdan o'tgansiz.

🎓 Dashboard ochish uchun pastdagi <b>"HMHY"</b> tugmasini 
bosing yoki quyidagi buyruqlardan foydalaning:

/lessons - Mening darslarim
/lessons_history - Darslar tarixi
/help - Yordam`);
                return;
            }
        }
        catch (error) {
            console.log('Error in bot update', error);
        }
    }
    async onHelp(ctx) {
        await ctx.replyWithHTML(`❓ <b>Yordam</b>

🎓 <b>Dashboard</b> - Pastdagi <b>"HMHY"</b> tugmasini bosing

📋 <b>Mavjud buyruqlar:</b>
/start - Botni qayta boshlash
/lessons - Mening darslarim
/lessons_history - Darslar tarixi
/help - Yordam

💡 <b>HMHY orqali:</b>
• Ustozlarni ko'rish va tanlash
• Dars vaqtlarini band qilish
• Darslaringizni boshqarish
• Profilingizni tahrirlash

📞 Muammo bo'lsa, admin bilan bog'laning.`);
    }
    async onLessons(ctx) {
        try {
            await ctx.reply('Sizning darslaringizni yuklayapman... ⏳');
            const lessons = await this.botService.getStudentLessons(ctx.from?.id);
            if (!lessons.lessons.length) {
                await ctx.replyWithHTML("📚 Sizda hali darslar yo'q.");
                return;
            }
            const formatDateTime = (isoDate) => {
                return new Date(isoDate).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                });
            };
            const message = `📚 <b>Mening darslarim:</b>\n\n${lessons.lessons
                .map((item, index) => {
                return `${index + 1}. <b>Dars nomi: \t${item.name}</b>
📅 Boshlanish vaqti:\t ${formatDateTime(item.startTime)}
📅 Tugash vaqti:\t ${formatDateTime(item.endTime)}
🔗 Link: ${item.googleMeetsUrl}
───────────────`;
            })
                .join('\n\n')}`;
            await ctx.replyWithHTML(message);
        }
        catch (error) {
            console.log(error);
            await ctx.reply('❌ Xatolik yuz berdi.');
        }
    }
    async onLessonHistory(ctx) {
        await ctx.reply('Sizning darslaringiz tarixini yuklayapman... ⏳');
        const lessons = await this.botService.getStudentHistoryLessons(ctx.from?.id);
        if (!lessons.lessons.length) {
            await ctx.replyWithHTML("📚 Sizda hali darslar tarixi yo'q.");
            return;
        }
        const formatDateTime = (isoDate) => {
            if (!isoDate)
                return 'Belgilanmagan';
            return new Date(isoDate).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        };
        const message = `📚 <b>Mening darslarim tarixi:</b>\n\n${lessons.lessons
            .map((item, index) => {
            return `${index + 1}. <b>Dars nomi: \t${item.lesson.name}</b>
✅ Dars band qilingan sana :\t ${formatDateTime(item.lesson.bookedAt)}
📅 Boshlangan vaqti:\t ${formatDateTime(item.lesson.startTime)}
📅 Tugagan vaqti:\t ${formatDateTime(item.lesson.endTime)}
💰 Dars narxi:\t ${item.lesson.price}$
👤 Ustoz:\t ${item.teacher.fullName}
⭐ Darsga berilgan reyting:\t ${item.star}
📌 Darsga berilgan feedback:\t ${item.feedback}

───────────────`;
        })
            .join('\n\n')}`;
        await ctx.replyWithHTML(message);
        try {
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.BotUpdate = BotUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.Help)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onHelp", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('lessons'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onLessons", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('lessons_history'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onLessonHistory", null);
exports.BotUpdate = BotUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __metadata("design:paramtypes", [bot_service_1.BotService])
], BotUpdate);
//# sourceMappingURL=bot.update.js.map