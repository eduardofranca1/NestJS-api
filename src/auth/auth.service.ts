import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // ecrypt password and use compare password function
  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // verificar credenciais do usuário para fazer o login
  async login(username: string) {
    const user = await this.userService.findByUsername(username);
    const payload = { username: username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      user: user,
    };
  }
}
