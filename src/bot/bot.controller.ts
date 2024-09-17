import { Controller, Get, Patch, Param, Delete } from '@nestjs/common';
import { BotService } from './bot.service';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
// import { message } from 'telegraf/filters';

@Controller('bot')
export class BotController {
  bot: Telegraf;
  URL: string;
  constructor(
    private readonly botService: BotService,
    private configService: ConfigService,
  ) {
    this.bot = new Telegraf(configService.get('BOT_TOKEN'));
    this.URL = this.configService.get('VERCEL_URL');
    this.bot.hears('url', (ctx) => {
      try {
        const url = configService.get('VERCEL_URL');

        ctx.reply(url || '[ERROR]:: URL is undefined');
      } catch (e) {
        ctx.reply(e);
      }
    });
    this.bot.launch();
    console.log('Bot started');
  }
  @Get('')
  findOne() {
    const VERCEL_URL = this.configService.get('VERCEL_URL');
    console.log('VERCEL_URL: ', VERCEL_URL);

    this.update(VERCEL_URL);
    return this.botService.getWebhookCallback();
  }
  @Patch(':url')
  update(@Param('id') id: string) {
    return this.botService.setWebhook(id);
  }
  @Delete()
  remove() {
    return this.botService.removeWebhook();
  }
}
