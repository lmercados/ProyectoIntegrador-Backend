import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { createRoleDto, readRoleDto, updateRoleDto } from './dtos';

import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':roleId')
  getRole(@Param('roleId', ParseIntPipe) roleId: number): Promise<readRoleDto> {
    return this._roleService.get(roleId);
  }
  @Get()
  getRoles(): Promise<readRoleDto[]> {
    return this._roleService.getAll();
  }
  @Post('create')
  createRole(@Body() role: Partial<createRoleDto>): Promise<readRoleDto> {
    return this._roleService.create(role);
  }
  @Patch(':roleId')
  updateRole(
    @Param('roleId', ParseIntPipe) roleId: number,
    @Body() role: Partial<updateRoleDto>,
  ) {
    return this._roleService.update(roleId, role);
  }

  @Delete(':roleId')
  deleteRole(@Param('roleId', ParseIntPipe) roleId: number) {
    return this._roleService.delete(roleId);
  }
}
