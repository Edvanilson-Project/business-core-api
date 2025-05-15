import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';
import { EmployeeLocation } from './entities/employee-location.entity';
import { Repository } from 'typeorm';
export declare class EmployeeLocationService {
    private readonly employeeLocationRepository;
    constructor(employeeLocationRepository: Repository<EmployeeLocation>);
    create(createEmployeeLocationDto: CreateEmployeeLocationDto): Promise<EmployeeLocation>;
    findAll(): Promise<EmployeeLocation[]>;
    findOne(id: number): Promise<EmployeeLocation | null>;
    findOneOrFail(id: number): Promise<EmployeeLocation>;
    update(id: number, updateEmployeeLocationDto: UpdateEmployeeLocationDto): Promise<EmployeeLocation>;
    remove(id: number): Promise<void>;
}
