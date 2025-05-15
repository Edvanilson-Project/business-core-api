import { EmployeeLocationService } from './employee-location.service';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';
export declare class EmployeeLocationController {
    private readonly employeeLocationService;
    constructor(employeeLocationService: EmployeeLocationService);
    create(createEmployeeLocationDto: CreateEmployeeLocationDto): Promise<CreateEmployeeLocationDto>;
    findAll(): Promise<CreateEmployeeLocationDto[]>;
    findOne(id: number): Promise<CreateEmployeeLocationDto | null>;
    update(id: number, updateEmployeeLocationDto: UpdateEmployeeLocationDto): Promise<CreateEmployeeLocationDto>;
    remove(id: number): Promise<void>;
}
