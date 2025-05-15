import { BaseEntity } from 'src/common/entities/base.entity';
import { EmployeePosition } from '../../employee-position/entities/employee-position.entity';
export declare class Salary extends BaseEntity {
    employeePosition: EmployeePosition;
    salary: number;
    startDate: Date;
    endDate?: Date;
}
