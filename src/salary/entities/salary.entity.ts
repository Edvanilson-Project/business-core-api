import { EmployeePosition } from 'src/employee-position/entities/employee-position.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Position } from 'src/position/entities/position.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único da remuneração (chave primária)

  @ManyToOne(() => EmployeePosition, { nullable: false })
  @JoinColumn({ name: 'employeePositionId' })
  employeePosition: EmployeePosition; // Referência à posição do funcionário

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number; // Valor do salário

  @Column({ type: 'date' })
  startDate: Date; // Data de início da vigência do salário

  @Column({ type: 'date', nullable: true })
  endDate?: Date; // Data de fim da vigência do salário (se aplicável)

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; // Data de criação do registro do cargo (gerado automaticamente)

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt?: Date; // Data da última atualização do registro do cargo (atualizado automaticamente)
}
