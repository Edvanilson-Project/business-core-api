import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';
import { ScheduleShift } from './entities/schedule-shift.entity';
import { Repository } from 'typeorm';
export declare class ScheduleShiftService {
    private readonly scheduleShiftRepository;
    constructor(scheduleShiftRepository: Repository<ScheduleShift>);
    create(createScheduleShiftDto: CreateScheduleShiftDto): Promise<ScheduleShift>;
    findAll(): Promise<ScheduleShift[]>;
    findOne(id: number): Promise<ScheduleShift | null>;
    findOneOrFail(id: number): Promise<ScheduleShift>;
    update(id: number, updateScheduleShiftDto: UpdateScheduleShiftDto): Promise<ScheduleShift>;
    remove(id: number): Promise<void>;
}
