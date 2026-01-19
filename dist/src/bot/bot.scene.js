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
exports.RegistrationScene = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const bot_service_1 = require("./bot.service");
let RegistrationScene = class RegistrationScene {
    botService;
    constructor(botService) {
        this.botService = botService;
    }
    async onEnter(ctx) {
        await ctx.reply('Iltimos, ismingizni kiriting:');
    }
    async onText(ctx) {
        const text = ctx.message.text;
        if (!ctx.session.firstName) {
            ctx.session.firstName = text;
            await ctx.reply('Familiyangizni kiriting:');
        }
        else if (!ctx.session.lastName) {
            ctx.session.lastName = text;
            await ctx.reply('Telefon raqamingizni yuboring:', telegraf_1.Markup.keyboard([
                telegraf_1.Markup.button.contactRequest('📱 Telefon raqamni yuborish'),
            ]).resize());
        }
    }
    async onContact(ctx) {
        const contact = ctx.message.contact;
        if (contact.user_id != ctx.message?.from.id) {
            await ctx.reply("❌ Iltimos, o'zingizning telefon raqamingizni yuboring.");
            return;
        }
        ctx.session.phoneNumber = contact.phone_number;
        await this.botService.registerStudent({
            tgId: ctx.from?.id,
            firstName: ctx.session.firstName,
            lastName: ctx.session.lastName,
            tgUsername: ctx.from?.username,
            phoneNumber: ctx.session.phoneNumber,
        });
        await ctx.reply("✅ Ro'yxatdan o'tdingiz!", telegraf_1.Markup.removeKeyboard());
        ctx.session = {};
        await ctx.scene.leave();
    }
};
exports.RegistrationScene = RegistrationScene;
__decorate([
    (0, nestjs_telegraf_1.SceneEnter)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistrationScene.prototype, "onEnter", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistrationScene.prototype, "onText", null);
__decorate([
    (0, nestjs_telegraf_1.On)('contact'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistrationScene.prototype, "onContact", null);
exports.RegistrationScene = RegistrationScene = __decorate([
    (0, nestjs_telegraf_1.Scene)('registration'),
    __metadata("design:paramtypes", [bot_service_1.BotService])
], RegistrationScene);
//# sourceMappingURL=bot.scene.js.map