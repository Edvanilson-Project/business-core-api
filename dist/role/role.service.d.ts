import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepo;
    constructor(roleRepo: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): string;
    findByIds(ids: number[]): Promise<Role[]>;
    findOne(id: number): string;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
