import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  public async create(@Body() user: CreateUserDto) {
    return await this.service.create(user);
  }

  @Get()
  public async findAll() {
    return await this.service.findAll();
  }

  @Get('/findOne')
  public async findOne(@Query('id') id: string) {
    return await this.service.findById(id);
  }
}
