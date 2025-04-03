import { EmployeePosition } from "src/employee-position/entities/employee-position.entity";
import { Location } from "src/location/entities/location.entity";
import { Salary } from "src/salary/entities/salary.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único do funcionário

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstName: string; // Primeiro nome do funcionário

  @Column({ type: 'varchar', length: 100, nullable: false })
  lastName: string; // Sobrenome do funcionário

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string; // E-mail do funcionário

  @Column({ type: 'date', nullable: false })
  hireDate: Date; // Data de contratação

  @Column({ type: 'date', nullable: true })
  terminationDate?: Date; // Data de desligamento (se aplicável)

  @Column({ type: 'boolean', default: true })
  isActive: boolean; // Indica se o funcionário está ativo ou não

  @OneToMany(() => EmployeePosition, employeePosition => employeePosition.employee)
  employeePositions: EmployeePosition[];

  @ManyToOne(() => Location, { nullable: false })
  @JoinColumn({ name: 'locationId' })
  location: Location; // Local onde o funcionário trabalha

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; // Data de criação do registro

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt?: Date; // Data da última atualização do registro
}
