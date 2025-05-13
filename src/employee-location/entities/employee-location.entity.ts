import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Location } from '../../location/entities/location.entity';

@Entity()
export class EmployeeLocation extends BaseEntity {
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @ManyToOne(() => Location, { nullable: false })
  @JoinColumn({ name: 'locationId' })
  location: Location;

  @Column({ type: 'date', nullable: false })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;
}
