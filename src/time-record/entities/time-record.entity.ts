import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TimeRecord {
    @PrimaryGeneratedColumn()
    id: number; // Identificador único da batida pendente
  
    @ManyToOne(() => Employee, { nullable: false })
    @JoinColumn({ name: 'employeeId' })
    employee: Employee; // Funcionário que fez a batida
  
    @Column({ type: 'timestamp', nullable: false })
    timestamp: Date; // Hora da batida
  
    @Column({ type: 'boolean', nullable: false })
    isEntry: boolean; // Indica se é uma entrada (true) ou saída (false)
  
    @Column({ type: 'date', nullable: false })
    date: Date; // Data da batida
  
    @Column({ type: 'varchar', length: 20, default: 'pending' }) // status pode ser 'pending', 'processed'
    status: string; // Status da batida
}
