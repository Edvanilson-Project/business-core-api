import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly roleService: RoleService,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepo
      .createQueryBuilder('user')
      .addSelect('user.password')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.email = :email', { email })
      .getOne();

    if (!user) {
      return null;
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const { password, roles, ...rest } = createUserDto;

    const userRoles = await this.roleService.findByIds(roles);

    const newUser = this.userRepo.create({
      ...rest,
      password: bcrypt.hashSync(password, 10),
      roles: userRoles,
    });

    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // Se roles não estiver definido, use um array vazio
    const userRoles = updateUserDto.roles ? updateUserDto.roles : [];

    // Agora, `userRoles` será um array, nunca undefined
    const roles =
      userRoles.length > 0 ? await this.roleService.findByIds(userRoles) : [];

    // Prepare o usuário com os dados atualizados
    const user = await this.userRepo.preload({
      id: id,
      ...updateUserDto,
      roles: roles, // Passando as roles como um array de objetos Role
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Salve o usuário com as atualizações
    return this.userRepo.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.userRepo.remove(user);
  }
}
