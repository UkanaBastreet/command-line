import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private config: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const VERCEL_URL = process.env.VERCEL_URL;

    console.log('VERCEL_URL: ', VERCEL_URL);
    return VERCEL_URL;
    // return this.appService.getHello();
  }
}
