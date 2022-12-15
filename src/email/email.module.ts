import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.mailgun.org',
          port: 587,
          secure: false,
          auth: {
            user: 'postmaster@sandbox65925c50ae0b41a4b794a1c45603e807.mailgun.org',
            pass: '3bae5f5e22ff69727097877d3817a8ef-48d7d97c-44109a5b',
          },
          // ignoreTLS: true,
        },
      }),
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
