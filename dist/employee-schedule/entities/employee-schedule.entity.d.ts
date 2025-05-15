import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
export declare class EmployeeSchedule extends BaseEntity {
    employee: Employee;
    schedule: Schedule;
    startDate: Date;
    endDate?: Date;
}
