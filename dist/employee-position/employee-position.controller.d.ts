import { EmployeePositionService } from './employee-position.service';
import { CreateEmployeePositionDto } from './dto/create-employee-position.dto';
import { UpdateEmployeePositionDto } from './dto/update-employee-position.dto';
import { EmployeePosition } from './entities/employee-position.entity';
export declare class EmployeePositionController {
    private readonly employeePositionService;
    constructor(employeePositionService: EmployeePositionService);
    create(createEmployeePositionDto: CreateEmployeePositionDto): Promise<EmployeePosition>;
    findAll(): Promise<EmployeePosition[]>;
    findOne(id: number): Promise<EmployeePosition | null>;
    update(id: number, updateEmployeePositionDto: UpdateEmployeePositionDto): Promise<EmployeePosition>;
    remove(id: number): Promise<void>;
}
