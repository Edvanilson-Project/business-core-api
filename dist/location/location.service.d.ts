import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { BranchService } from 'src/branch/branch.service';
export declare class LocationService {
    private readonly locationRepo;
    private readonly branchService;
    constructor(locationRepo: Repository<Location>, branchService: BranchService);
    create(createLocationDto: CreateLocationDto): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location | null>;
    findOneOrFail(id: number): Promise<Location>;
    findByNameAndBranchIdOrFail(name: string, branchId: number): Promise<Location>;
    findByNameAndBranchIdOrFailIfExists(name: string, branchId: number): Promise<void>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location>;
    remove(id: number): Promise<void>;
}
