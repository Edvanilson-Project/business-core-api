import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Position } from '../../position/entities/position.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class EmployeePosition extends BaseEntity {
  @ManyToOne(() => Employee, (employee) => employee.employeePositions, {
    nullable: false,
  })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @ManyToOne(() => Position, (position) => position.employeePositions, {
    nullable: false,
  })
  @JoinColumn({ name: 'positionId' })
  position: Position;

  @Column({ type: 'date', nullable: false })
  startDate: Date; // Data de início da relação com o cargo

  @Column({ type: 'date', nullable: true })
  endDate?: Date; // Data de fim da relação com o cargo (se aplicável)
}
