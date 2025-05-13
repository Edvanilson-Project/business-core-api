import { BaseEntity } from 'src/common/entities/base.entity';
import { Position } from '../../position/entities/position.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Department extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => Position, (position) => position.department)
  positions: Position[];
}
