import { Department } from 'src/department/entities/department.entity';
import { EmployeePosition } from 'src/employee-position/entities/employee-position.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único do cargo (chave primária)

  @Column({ type: 'varchar', length: 255 })
  name: string; // Nome do cargo (ex: "Analista de Sistemas", "Gerente de Projetos")

  @Column({ type: 'text', nullable: true })
  description?: string; // Descrição detalhada das responsabilidades e atividades do cargo

  @Column({ type: 'varchar', length: 50, nullable: true })
  level?: string; // Nível hierárquico do cargo (ex: "Júnior", "Pleno", "Sênior")

  @Column({ type: 'text', nullable: true })
  requirements?: string; // Requisitos necessários para ocupar o cargo (ex: "Graduação em...", "Experiência em...")

  @ManyToOne(() => Department, (department) => department.positions, {
    nullable: false,
  })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(
    () => EmployeePosition,
    (employeePosition) => employeePosition.position,
  )
  employeePositions: EmployeePosition[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; // Data de criação do registro do cargo (gerado automaticamente)

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt?: Date; // Data da última atualização do registro do cargo (atualizado automaticamente)
}
