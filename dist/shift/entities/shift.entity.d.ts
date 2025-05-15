import { BaseEntity } from 'src/common/entities/base.entity';
import { ScheduleShift } from '../../schedule-shift/entities/schedule-shift.entity';
export declare class Shift extends BaseEntity {
    startTime: string;
    endTime: string;
    scheduleShifts: ScheduleShift[];
}
