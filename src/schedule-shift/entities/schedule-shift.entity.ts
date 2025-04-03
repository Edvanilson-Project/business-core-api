import { Schedule } from 'src/schedule/entities/schedule.entity';
import { Shift } from 'src/shift/entities/shift.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ScheduleShift {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único do relacionamento

  @ManyToOne(() => Schedule, { nullable: false })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Schedule; // Referência à escala

  @ManyToOne(() => Shift, { nullable: false })
  @JoinColumn({ name: 'shiftId' })
  shift: Shift; // Referência ao turno
}
