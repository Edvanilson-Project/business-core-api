import { Branch } from '../../branch/entities/branch.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome da empresa

  @Column({ type: 'text', nullable: true })
  description?: string; // Descrição da empresa

  @OneToMany(() => Branch, (branch) => branch.company)
  branches: Branch[]; // Relação com as filiais
}
