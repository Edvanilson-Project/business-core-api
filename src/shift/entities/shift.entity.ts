import { BaseEntity } from 'src/common/entities/base.entity';
import { ScheduleShift } from '../../schedule-shift/entities/schedule-shift.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Shift extends BaseEntity {
  @Column({ type: 'time', nullable: false })
  startTime: string; // Hora de início do turno

  @Column({ type: 'time', nullable: false })
  endTime: string; // Hora de término do turno

  @OneToMany(() => ScheduleShift, (scheduleShift) => scheduleShift.shift)
  scheduleShifts: ScheduleShift[]; // Relação com ScheduleShift
}
