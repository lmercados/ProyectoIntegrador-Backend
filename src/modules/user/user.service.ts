import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { RoleRepository } from '../transformador/roles/role.repository';
import { status } from '../../shared/entity-status.num';
import { UserDetails } from './user.details.entity';
import { readUserDto, updateUserDto } from './dtos';
import { plainToClass } from 'class-transformer';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}
  async get(userId: number): Promise<readUserDto> {
    if (!userId) {
      throw new BadRequestException('userId must be sent');
    }
    const user: User = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!user) {
      throw new NotFoundException('user does not exist');
    }

    return plainToClass(readUserDto, user);
  }
  async getAll(): Promise<readUserDto[]> {
    const users: User[] = await this._userRepository.find({
      where: { status: status.ACTIVE },
    });

    if (!users) {
      throw new NotFoundException('users does not exist');
    }

    return users.map((user: User) => plainToClass(readUserDto, user));
  }

  async update(userId: number, user: updateUserDto): Promise<readUserDto> {
    const foundUser = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!foundUser) {
      throw new NotFoundException('user does not exit');
    }

    foundUser.username = user.username;
    const updatedUser = await this._userRepository.save(foundUser);

    return plainToClass(readUserDto, user);
  }
  async delete(userId: number): Promise<void> {
    if (!userId) {
      throw new BadRequestException('userId must be sent');
    }
    const userExits: User = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!userExits) {
      throw new NotFoundException('user does not');
    }

    await this._userRepository.update(userId, { status: status.INACTIVE });
  }
  
  async setRoletoUser(userId: number, roleId: number): Promise<boolean> {
    const userExists = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });
    if (!userExists) {
      throw new NotFoundException('user does not exist');
    }
    const roleExists = await this._roleRepository.findOne(roleId, {
      where: { status: status.ACTIVE },
    });
    if (!roleExists) {
      throw new NotFoundException('role does not exist');
    }

    userExists.Roles.push(roleExists);
    await this._userRepository.save(userExists);
    return true;
  }
}
