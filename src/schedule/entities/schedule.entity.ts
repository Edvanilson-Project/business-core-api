import { BaseEntity } from 'src/common/entities/base.entity';
import { ScheduleShift } from '../../schedule-shift/entities/schedule-shift.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Schedule extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome da escala (ex: "Escala Noturna", "Escala Diurna")

  @Column({ type: 'text', nullable: true })
  description?: string; // Descrição da escala

  @OneToMany(() => ScheduleShift, (scheduleShift) => scheduleShift.schedule)
  scheduleShifts: ScheduleShift[]; // Relação com ScheduleShift
}
