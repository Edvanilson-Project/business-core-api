import { BaseEntity } from 'src/common/entities/base.entity';
import { Role } from 'src/role/entities/role.entity';
import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @ManyToMany(() => Role, { eager: true })
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];
}
