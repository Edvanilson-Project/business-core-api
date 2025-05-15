import { EmployeeLocation } from '../../employee-location/entities/employee-location.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
export declare class Location extends BaseEntity {
    branch: Branch;
    branchId: number;
    employeeLocations: EmployeeLocation[];
    name: string;
}
