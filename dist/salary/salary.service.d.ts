import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { Salary } from './entities/salary.entity';
import { Repository } from 'typeorm';
export declare class SalaryService {
    private readonly salaryRepo;
    constructor(salaryRepo: Repository<Salary>);
    create(createSalaryDto: CreateSalaryDto): Promise<Salary>;
    findAll(): Promise<Salary[]>;
    findOne(id: number): Promise<Salary | null>;
    findOneOrFail(id: number): Promise<Salary>;
    update(id: number, updateSalaryDto: UpdateSalaryDto): Promise<Salary>;
    remove(id: number): Promise<void>;
}
