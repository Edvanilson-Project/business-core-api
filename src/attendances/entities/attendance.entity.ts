import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Attendance extends BaseEntity {
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee; // Funcionário que fez a batida de ponto

  @ManyToOne(() => Schedule, { nullable: false })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Schedule; // Escala relacionada à batida de ponto

  @Column({ type: 'timestamp', nullable: false })
  punchIn: Date; // Hora de entrada

  @Column({ type: 'timestamp', nullable: true })
  punchOut?: Date; // Hora de saída (opcional)

  @Column({ type: 'date', nullable: false })
  date: Date; // Data da batida de ponto
}
