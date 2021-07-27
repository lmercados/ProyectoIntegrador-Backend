import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';
import { getConnection } from 'typeorm';
import { createRoleDto, readRoleDto, updateRoleDto } from './dtos';
import { plainToClass } from 'class-transformer';
import { RoleType } from './roletype.enum';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}
  async get(id: number): Promise<readRoleDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const role: Role = await this._roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!role) {
      throw new NotFoundException('role does not exist');
    }

    return plainToClass(readRoleDto, Role);
  }
  async getAll(): Promise<readRoleDto[]> {
    const roles: Role[] = await this._roleRepository.find({
      where: { status: 'ACTIVE' },
    });

    if (!roles) {
      throw new NotFoundException('roles does not exist');
    }

    return roles.map((role: Role) => plainToClass(readRoleDto, Role));
  }

  async create(role: Partial<createRoleDto>): Promise<readRoleDto> {
    const savedRole: Role = await this._roleRepository.save(role);
    return plainToClass(readRoleDto, Role);
  }
  async update(
    roleId: number,
    role: Partial<updateRoleDto>,
  ): Promise<readRoleDto> {
    const foundRole: Role = await this._roleRepository.findOne(roleId, {
      where: { status: 'ACTIVE' },
    });
    if (!foundRole) {
      throw new NotFoundException('This role does not exist');
    }
    foundRole.name = role.name;
    foundRole.description = role.description;

    const updatedRole = await this._roleRepository.update(roleId, foundRole);

    return plainToClass(readRoleDto, updatedRole);
  }
  async delete(id: number): Promise<void> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const roleExits: Role = await this._roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!roleExits) {
      throw new NotFoundException('role does not');
    }

    await this._roleRepository.update(id, { status: 'INACTIVE' });
  }
}
