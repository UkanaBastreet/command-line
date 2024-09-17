import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [BotController],
  providers: [BotService, ConfigService],
})
export class BotModule {}
