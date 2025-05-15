import { Branch } from './entities/branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Repository } from 'typeorm';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CompanyService } from 'src/company/company.service';
export declare class BranchService {
    private readonly branchRepo;
    private readonly companyService;
    constructor(branchRepo: Repository<Branch>, companyService: CompanyService);
    create(createBranchDto: CreateBranchDto): Promise<Branch>;
    findAll(): Promise<Branch[]>;
    findOne(id: number): Promise<Branch | null>;
    findOneOrFail(id: number): Promise<Branch>;
    findByNameAndCompanyIdOrFail(name: string, companyId: number): Promise<Branch>;
    findByNameAndCompanyIdOrFailIfExists(name: string, companyId: number): Promise<void>;
    update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch>;
    remove(id: number): Promise<void>;
}
