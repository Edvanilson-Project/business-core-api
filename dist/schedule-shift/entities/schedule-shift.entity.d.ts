import { BaseEntity } from 'src/common/entities/base.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { Shift } from '../../shift/entities/shift.entity';
export declare class ScheduleShift extends BaseEntity {
    schedule: Schedule;
    shift: Shift;
}
