import { BaseEntity } from 'src/common/entities/base.entity';
import { Role } from 'src/role/entities/role.entity';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    password: string;
    roles: Role[];
}
