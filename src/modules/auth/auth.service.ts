import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { SingupDto, SinginDto } from './dto';
import { User } from '../user/user.entity';
import { compare } from 'bcryptjs';
import { IJwtPayload } from './jwt-payload.interface';
import { RoleType } from '../transformador/roles/roletype.enum';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly _authRepository: AuthRepository,
    private readonly _jwtService: JwtService,
  ) {}

  async singup(signupDto: SingupDto): Promise<void> {
    const { username, email } = signupDto;
    const userExists = await this._authRepository.findOne({
      where: [{ username }, { email }],
    });
    if (userExists) {
      throw new NotFoundException('username or email already exists');
    }

         this._authRepository.singUp(signupDto);
  }

  async singin(signupDto: SinginDto): Promise<{ token: string }> {
    const { username, password } = signupDto;
    const user: User = await this._authRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException('user does not  exists');
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new NotFoundException('invalid credentials');
    }

    const payload: IJwtPayload = {
      id: user.usuarioId,
      email: user.email,
      username: user.username,
      roles: user.Roles.map((r) => r.name as RoleType),
    };

    const token = await this._jwtService.sign(payload);

    return { token };
  }
}
