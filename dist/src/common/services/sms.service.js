"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SmsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SmsService = SmsService_1 = class SmsService {
    logger = new common_1.Logger(SmsService_1.name);
    async sendOtp(phoneNumber, otp) {
        try {
            const cleanPhone = phoneNumber.replace('+', '');
            const message = process.env.SMS_TEMPLATE?.replace('{otp}', otp)
                || `Sizning tasdiqlash kodingiz: ${otp}`;
            const response = await axios_1.default.post(process.env.SMS_SERVICE_URL, {
                mobile_phone: cleanPhone,
                message: message,
                from: '4546',
            }, {
                headers: {
                    Authorization: `Bearer ${process.env.SMS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            });
            if (response.data?.status === 'waiting' || response.data?.id) {
                this.logger.log(`OTP yuborildi: ${phoneNumber}`);
                return true;
            }
            this.logger.error(`SMS yuborishda xatolik: ${JSON.stringify(response.data)}`);
            return false;
        }
        catch (error) {
            this.logger.error(`SMS service xatolik: ${error.message}`);
            return false;
        }
    }
    generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = SmsService_1 = __decorate([
    (0, common_1.Injectable)()
], SmsService);
//# sourceMappingURL=sms.service.js.map