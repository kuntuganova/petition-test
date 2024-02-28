import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema';
import { CreateUserDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Delete()
  async delete(@Param() id: string): Promise<User> {
    return await this.userService.delete(id);
  }
}
