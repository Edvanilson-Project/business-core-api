import { CreateEmployeeScheduleDto } from './dto/create-employee-schedule.dto';
import { UpdateEmployeeScheduleDto } from './dto/update-employee-schedule.dto';
import { EmployeeSchedule } from './entities/employee-schedule.entity';
import { Repository } from 'typeorm';
export declare class EmployeeScheduleService {
    private readonly employeeScheduleRepo;
    constructor(employeeScheduleRepo: Repository<EmployeeSchedule>);
    create(createEmployeeScheduleDto: CreateEmployeeScheduleDto): Promise<EmployeeSchedule>;
    findAll(): Promise<EmployeeSchedule[]>;
    findOne(id: number): Promise<EmployeeSchedule | null>;
    findOneOrFail(id: number): Promise<EmployeeSchedule>;
    update(id: number, updateEmployeeScheduleDto: UpdateEmployeeScheduleDto): Promise<EmployeeSchedule>;
    remove(id: number): Promise<void>;
}
