import { BaseEntity } from 'src/common/entities/base.entity';
import { Department } from '../../department/entities/department.entity';
import { EmployeePosition } from '../../employee-position/entities/employee-position.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Position extends BaseEntity {
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
}
