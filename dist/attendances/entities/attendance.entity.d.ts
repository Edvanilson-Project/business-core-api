import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
export declare class Attendance extends BaseEntity {
    employee: Employee;
    schedule: Schedule;
    punchIn: Date;
    punchOut?: Date;
    date: Date;
}
