import { BaseEntity } from 'src/common/entities/base.entity';
import { EmployeePosition } from '../../employee-position/entities/employee-position.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Salary extends BaseEntity {
  @ManyToOne(() => EmployeePosition, { nullable: false })
  @JoinColumn({ name: 'employeePositionId' })
  employeePosition: EmployeePosition; // Referência à posição do funcionário

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number; // Valor do salário

  @Column({ type: 'date' })
  startDate: Date; // Data de início da vigência do salário

  @Column({ type: 'date', nullable: true })
  endDate?: Date; // Data de fim da vigência do salário (se aplicável)
}
