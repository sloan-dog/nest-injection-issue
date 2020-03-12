import { Controller, Get } from '@nestjs/common';
import { AppService } from './services/app.service';
import { middlewaredRoute } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(middlewaredRoute)
  testMiddleware(): string {
    return 'testing middleware';
  }
}
