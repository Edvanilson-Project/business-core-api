import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private readonly companyRepo;
    constructor(companyRepo: Repository<Company>);
    create(createCompanyDto: CreateCompanyDto[]): Promise<Company[]>;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company | null>;
    findOneOrFail(id: number): Promise<Company>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    remove(id: number): Promise<void>;
}
