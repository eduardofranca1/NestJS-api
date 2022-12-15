import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
