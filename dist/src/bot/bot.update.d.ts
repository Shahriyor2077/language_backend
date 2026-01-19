import { Context } from 'telegraf';
import { BotService } from './bot.service';
interface BotContext extends Context {
    scene: any;
}
export declare class BotUpdate {
    private readonly botService;
    constructor(botService: BotService);
    onStart(ctx: BotContext): Promise<void>;
    onHelp(ctx: Context): Promise<void>;
    onLessons(ctx: Context): Promise<void>;
    onLessonHistory(ctx: Context): Promise<void>;
}
export {};
