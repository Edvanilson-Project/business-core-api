import { CreateEmployeePositionDto } from './dto/create-employee-position.dto';
import { UpdateEmployeePositionDto } from './dto/update-employee-position.dto';
import { EmployeePosition } from './entities/employee-position.entity';
import { Repository } from 'typeorm';
export declare class EmployeePositionService {
    private readonly employeePositionRepository;
    constructor(employeePositionRepository: Repository<EmployeePosition>);
    create(createEmployeePositionDto: CreateEmployeePositionDto): Promise<EmployeePosition>;
    findAll(): Promise<EmployeePosition[]>;
    findOne(id: number): Promise<EmployeePosition | null>;
    findOneOrFail(id: number): Promise<EmployeePosition>;
    update(id: number, updateEmployeePositionDto: UpdateEmployeePositionDto): Promise<EmployeePosition>;
    remove(id: number): Promise<void>;
}
