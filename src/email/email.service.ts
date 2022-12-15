import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface EmailOptions {
  user: string;
  github: string;
  linkedin: string;
  phone: string;
  to: string;
  message: string;
  level: number;
}

@Injectable()
export class EmailService {
  constructor(private service: MailerService) {}

  public async sendEmail(options: EmailOptions) {
    this.service
      .sendMail({
        to: options.to,
        from: 'dudutoma1992@gmail.com',
        subject: 'Email from your site ✔',
        text: options.message,
        html: `
        <h1>Dudu, você tem uma nova mensagem de ${options.user}</h1>
        <ul> 
            <li>Email: ${options.to} </li>
            <li>LinkedIn: ${options.linkedin} </li>
            <li>Phone: ${options.phone} </li>
            <li>GitHub: ${options.github} </li>
            <li>Level: ${options.level} </li>
            <li>Message: ${options.message} </li>
        </ul>
        `,
      })
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
