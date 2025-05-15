import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: CreateScheduleDto): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findOne(id: number): Promise<Schedule | null>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<Schedule>;
    remove(id: number): Promise<void>;
}
