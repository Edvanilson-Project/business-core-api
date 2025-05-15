import { Branch } from '../../branch/entities/branch.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
export declare class Company extends BaseEntity {
    name: string;
    description?: string;
    branches: Branch[];
}
