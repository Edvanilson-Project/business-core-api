import { ScheduleShift } from 'src/schedule-shift/entities/schedule-shift.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único da escala

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // Nome da escala (ex: "Escala Noturna", "Escala Diurna")

  @Column({ type: 'text', nullable: true })
  description?: string; // Descrição da escala

  @OneToMany(() => ScheduleShift, (scheduleShift) => scheduleShift.schedule)
  scheduleShifts: ScheduleShift[]; // Relação com ScheduleShift
}
