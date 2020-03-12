import { Module } from '@nestjs/common';
import { AuthService } from './auth.service/auth.service';

@Module({
  imports: [],
  providers: [AuthService],
  exports: [AuthService],
})
export class AppModule {}