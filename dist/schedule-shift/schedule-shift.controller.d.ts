import { ScheduleShiftService } from './schedule-shift.service';
import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';
import { ScheduleShift } from './entities/schedule-shift.entity';
export declare class ScheduleShiftController {
    private readonly scheduleShiftService;
    constructor(scheduleShiftService: ScheduleShiftService);
    create(createScheduleShiftDto: CreateScheduleShiftDto): Promise<ScheduleShift>;
    findAll(): Promise<ScheduleShift[]>;
    findOne(id: number): Promise<ScheduleShift | null>;
    update(id: number, updateScheduleShiftDto: UpdateScheduleShiftDto): Promise<ScheduleShift>;
    remove(id: number): Promise<void>;
}
