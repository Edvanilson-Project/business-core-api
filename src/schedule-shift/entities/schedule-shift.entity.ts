import { BaseEntity } from 'src/common/entities/base.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { Shift } from '../../shift/entities/shift.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ScheduleShift extends BaseEntity {
  @ManyToOne(() => Schedule, { nullable: false })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Schedule; // Referência à escala

  @ManyToOne(() => Shift, { nullable: false })
  @JoinColumn({ name: 'shiftId' })
  shift: Shift; // Referência ao turno
}
