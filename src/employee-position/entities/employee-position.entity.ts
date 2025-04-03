import { Employee } from "src/employee/entities/employee.entity";
import { Position } from "src/position/entities/position.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeePosition {
    @PrimaryGeneratedColumn()
    id: number; // Identificador único do relacionamento
  
    @ManyToOne(() => Employee, employee => employee.employeePositions, { nullable: false })
    @JoinColumn({ name: 'employeeId' })
    employee: Employee;

    @ManyToOne(() => Position, position => position.employeePositions, { nullable: false })
    @JoinColumn({ name: 'positionId' })
    position: Position;
  
    @Column({ type: 'date', nullable: false })
    startDate: Date; // Data de início da relação com o cargo
  
    @Column({ type: 'date', nullable: true })
    endDate?: Date; // Data de fim da relação com o cargo (se aplicável)

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date; // Data de criação do registro
  
    @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt?: Date; // Data da última atualização do registro
}
