import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    console.log('validate');
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new HttpException('Username or password incorrect', 401);
    return user;
  }
}
