import { ScheduleShift } from 'src/schedule-shift/entities/schedule-shift.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único do turno

  @Column({ type: 'time', nullable: false })
  startTime: string; // Hora de início do turno

  @Column({ type: 'time', nullable: false })
  endTime: string; // Hora de término do turno

  @OneToMany(() => ScheduleShift, (scheduleShift) => scheduleShift.shift)
  scheduleShifts: ScheduleShift[]; // Relação com ScheduleShift
}
