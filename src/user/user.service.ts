import { Inject, Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>,
    private emailService: EmailService,
  ) {}

  public async create(data: CreateUserDto) {
    const userObject = this.repository.create(data);
    const newUser = await this.repository.save(userObject);
    await this.emailService.sendEmail({
      user: data.username,
      github: data.github,
      linkedin: data.linkedin,
      userEmail: data.email,
      phone: data.phone,
      message: data.message,
      level: data.level,
    });
    return {
      user: newUser,
    };
  }

  public async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id: id } });
    // if (!user) throw new HttpException('User does not found', 404);
    return user;
  }

  public async findByUsername(username: string): Promise<User> {
    return await this.repository.findOne({ where: { username: username } });
  }

  public async update(id: string) {}
}
