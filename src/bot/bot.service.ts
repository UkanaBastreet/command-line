import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
// import { message } from 'telegraf/filters';

@Injectable()
export class BotService {
  private bot: Telegraf;
  constructor() {}
  public async removeWebhook(): Promise<any> {
    return this.bot.telegram.deleteWebhook();
  }

  public async setWebhook(url: string): Promise<any> {
    return this.bot.telegram.setWebhook(url);
  }

  public getWebhookCallback() {
    return this.bot.webhookCallback('/webhook');
  }
}
