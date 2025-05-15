import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Branch } from './entities/branch.entity';
import { UpdateBranchDto } from './dto/update-branch.dto';
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
    create(createBranchDto: CreateBranchDto): Promise<Branch>;
    findAll(): Promise<Branch[]>;
    findOne(id: number): Promise<Branch | null>;
    update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch>;
    remove(id: number): Promise<void>;
}
