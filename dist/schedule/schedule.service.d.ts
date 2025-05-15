import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { Repository } from 'typeorm';
export declare class ScheduleService {
    private scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    create(createScheduleDto: CreateScheduleDto): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findOne(id: number): Promise<Schedule | null>;
    findOneOrFail(id: number): Promise<Schedule>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<Schedule>;
    remove(id: number): Promise<void>;
}
