import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const role = this.roleRepo.create(createRoleDto);
    return this.roleRepo.save(role);
  }

  findAll() {
    return `This action returns all role`;
  }

  async findByIds(ids: number[]): Promise<Role[]> {
    const roles = await this.roleRepo.findBy({ id: In(ids) });

    if (roles.length !== ids.length) {
      // Se não for, isso significa que algum ID não foi encontrado
      const missingIds = ids.filter(
        (id) => !roles.some((role) => role.id === id),
      );
      throw new BadRequestException(
        `The following role IDs were not found: ${missingIds.join(', ')}`,
      );
    }

    return roles;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} ${updateRoleDto} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
