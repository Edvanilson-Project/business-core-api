import { Branch } from "src/branch/entities/branch.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
  id: number; // Identificador único da empresa

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome da empresa

  @Column({ type: 'text', nullable: true })
  description?: string; // Descrição da empresa

  @OneToMany(() => Branch, (branch) => branch.company)
  branches: Branch[]; // Relação com as filiais
}
