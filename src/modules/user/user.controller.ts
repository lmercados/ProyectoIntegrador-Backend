import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../roles/decorators/role.decorator';
import { RoleGuard } from '../roles/guards/role.guard';
import { RoleType } from '../roles/roletype.enum';
import { readUserDto, updateUserDto } from './dtos';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':userId')
  //@Roles(RoleType.ADMINISTRATOR)
  // @UseGuards(AuthGuard(), RoleGuard)
  getUser(@Param('userId', ParseIntPipe) userId: number): Promise<readUserDto> {
    return this._userService.get(userId);
  }
  @UseGuards(AuthGuard())
  @Get()
  getUsers(): Promise<readUserDto[]> {
    return this._userService.getAll();
  }

  @Patch(':userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() user: updateUserDto,
  ) {
    return this._userService.update(userId, user);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number): Promise<void> {
    return this._userService.delete(userId);
  }

  @Post('setRole/:userId/:roleId')
  setRoletoUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('roleId', ParseIntPipe) roleId: number,
  ): Promise<boolean> {
    return this._userService.setRoletoUser(userId, roleId);
  }
}
