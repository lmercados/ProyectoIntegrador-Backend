import { genSalt, hash } from 'bcryptjs';
import { Entity, EntityRepository, getConnection, Repository } from 'typeorm';
import { Role } from '../transformador/roles/role.entity';
import { RoleRepository } from '../transformador/roles/role.repository';
import { RoleType } from '../transformador/roles/roletype.enum';
import { UserDetails } from '../user/user.details.entity';
import { User } from '../user/user.entity';
import { SingupDto } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async singUp(singupDto: SingupDto) {
    const { username, email, password } = singupDto;
    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email;

    const roleRepository: RoleRepository = await getConnection().getRepository(
      Role,
    );

    const defaultRole: Role = await roleRepository.findOne({
      where: { name: RoleType.GENERAL },
    });

    user.Roles = [defaultRole];

    const details = new UserDetails();
    details.name =singupDto.name
    details.lastname =singupDto.lastname
    user.details = details;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();
  }
}
