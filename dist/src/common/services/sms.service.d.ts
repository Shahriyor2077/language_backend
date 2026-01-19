export declare class SmsService {
    private readonly logger;
    sendOtp(phoneNumber: string, otp: string): Promise<boolean>;
    generateOtp(): string;
}
