import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from '../auth.module/auth.module';
import { ClientAccessMw } from 'src/auth.module/middleware/client-access.middleware';
import { middlewaredRoute } from './constants';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClientAccessMw)
    .forRoutes(middlewaredRoute)
  }
}
