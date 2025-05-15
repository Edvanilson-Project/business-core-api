import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';
export declare class PositionService {
    private readonly positionRepo;
    constructor(positionRepo: Repository<Position>);
    create(createPositionDto: CreatePositionDto): Promise<Position>;
    findAll(): Promise<Position[]>;
    findOne(id: number): Promise<Position | null>;
    findOneOrFail(id: number): Promise<Position>;
    update(id: number, updatePositionDto: UpdatePositionDto): Promise<Position>;
    remove(id: number): Promise<void>;
}
