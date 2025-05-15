import { EmployeeScheduleService } from './employee-schedule.service';
import { CreateEmployeeScheduleDto } from './dto/create-employee-schedule.dto';
import { UpdateEmployeeScheduleDto } from './dto/update-employee-schedule.dto';
import { EmployeeSchedule } from './entities/employee-schedule.entity';
export declare class EmployeeScheduleController {
    private readonly employeeScheduleService;
    constructor(employeeScheduleService: EmployeeScheduleService);
    create(createEmployeeScheduleDto: CreateEmployeeScheduleDto): Promise<EmployeeSchedule>;
    findAll(): Promise<EmployeeSchedule[]>;
    findOne(id: number): Promise<EmployeeSchedule | null>;
    update(id: number, updateEmployeeScheduleDto: UpdateEmployeeScheduleDto): Promise<EmployeeSchedule>;
    remove(id: number): Promise<void>;
}
