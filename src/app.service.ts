import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const VERCEL_URL = process.env.VERCEL_URL;

    console.log('VERCEL_URL: ', VERCEL_URL);
    return 'VERCEL_URL: ' + VERCEL_URL;
  }
}
