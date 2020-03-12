import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { ClientAccessMw } from 'src/auth.module/middleware/client-access.middleware';
import { middlewaredRoute } from './constants';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClientAccessMw)
    .forRoutes(middlewaredRoute)
  }
}
