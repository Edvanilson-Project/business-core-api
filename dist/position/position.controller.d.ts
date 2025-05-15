import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
    create(createPositionDto: CreatePositionDto): Promise<CreatePositionDto>;
    findAll(): Promise<CreatePositionDto[]>;
    findOne(id: number): Promise<CreatePositionDto | null>;
    update(id: number, updatePositionDto: UpdatePositionDto): Promise<UpdatePositionDto>;
    remove(id: number): Promise<void>;
}
