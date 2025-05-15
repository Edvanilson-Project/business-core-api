import { BaseEntity } from 'src/common/entities/base.entity';
import { ScheduleShift } from '../../schedule-shift/entities/schedule-shift.entity';
export declare class Schedule extends BaseEntity {
    name: string;
    description?: string;
    scheduleShifts: ScheduleShift[];
}
