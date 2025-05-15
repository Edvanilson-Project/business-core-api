import { BaseEntity } from 'src/common/entities/base.entity';
import { Department } from '../../department/entities/department.entity';
import { EmployeePosition } from '../../employee-position/entities/employee-position.entity';
export declare class Position extends BaseEntity {
    name: string;
    description?: string;
    level?: string;
    requirements?: string;
    department: Department;
    employeePositions: EmployeePosition[];
}
