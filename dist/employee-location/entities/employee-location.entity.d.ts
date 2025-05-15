import { BaseEntity } from 'src/common/entities/base.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Location } from '../../location/entities/location.entity';
export declare class EmployeeLocation extends BaseEntity {
    employee: Employee;
    location: Location;
    startDate: Date;
    endDate?: Date;
}
