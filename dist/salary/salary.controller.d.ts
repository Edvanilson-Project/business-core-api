import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { Salary } from './entities/salary.entity';
export declare class SalaryController {
    private readonly salaryService;
    constructor(salaryService: SalaryService);
    create(createSalaryDto: CreateSalaryDto): Promise<Salary>;
    findAll(): Promise<Salary[]>;
    findOne(id: number): Promise<Salary | null>;
    update(id: number, updateSalaryDto: UpdateSalaryDto): Promise<Salary>;
    remove(id: number): Promise<void>;
}
