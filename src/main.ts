import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Telegraf } from 'telegraf';
// import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const VERCEL_URL = process.env.VERCEL_URL;

  console.log('VERCEL_URL: ', VERCEL_URL);
  console.log('PORT: ', PORT);
  console.log('process.env.VAR: ' + process.env.VAR || 'NO VAR');
  console.log('BOT_TOKEN: ' + BOT_TOKEN);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
