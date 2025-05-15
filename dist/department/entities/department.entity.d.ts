import { BaseEntity } from 'src/common/entities/base.entity';
import { Position } from '../../position/entities/position.entity';
export declare class Department extends BaseEntity {
    name: string;
    positions: Position[];
}
