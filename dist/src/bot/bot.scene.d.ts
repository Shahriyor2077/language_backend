import { Context } from 'telegraf';
import { BotService } from './bot.service';
interface SessionData {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}
interface BotContext extends Context {
    session: SessionData;
    scene: any;
}
export declare class RegistrationScene {
    private readonly botService;
    constructor(botService: BotService);
    onEnter(ctx: BotContext): Promise<void>;
    onText(ctx: BotContext): Promise<void>;
    onContact(ctx: BotContext): Promise<void>;
}
export {};
