import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class EmployeeSchedule extends BaseEntity {
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee; // Referência ao funcionário

  @ManyToOne(() => Schedule, { nullable: false })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Schedule; // Referência à escala do funcionário

  @Column({ type: 'date', nullable: false })
  startDate: Date; // Data de início da escala para o funcionário

  @Column({ type: 'date', nullable: true })
  endDate?: Date; // Data de fim da escala para o funcionário (se aplicável)
}
