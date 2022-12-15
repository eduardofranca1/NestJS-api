import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.provider';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [DatabaseModule, EmailModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
