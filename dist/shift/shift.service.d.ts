import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Repository } from 'typeorm';
import { Shift } from './entities/shift.entity';
export declare class ShiftService {
    private readonly shiftRepository;
    constructor(shiftRepository: Repository<Shift>);
    create(createShiftDto: CreateShiftDto): Promise<Shift>;
    findAll(): Promise<Shift[]>;
    findOne(id: number): Promise<Shift | null>;
    findOneOrFail(id: number): Promise<Shift>;
    update(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift>;
    remove(id: number): Promise<void>;
}
