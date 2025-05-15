import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto[]): Promise<Company[]>;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company | null>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    remove(id: number): Promise<void>;
}
