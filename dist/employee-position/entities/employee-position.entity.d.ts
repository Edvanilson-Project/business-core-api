import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Position } from '../../position/entities/position.entity';
export declare class EmployeePosition extends BaseEntity {
    employee: Employee;
    position: Position;
    startDate: Date;
    endDate?: Date;
}
