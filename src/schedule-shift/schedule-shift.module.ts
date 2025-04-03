import { Module } from '@nestjs/common';
import { ScheduleShiftService } from './schedule-shift.service';
import { ScheduleShiftController } from './schedule-shift.controller';

@Module({
  controllers: [ScheduleShiftController],
  providers: [ScheduleShiftService],
})
export class ScheduleShiftModule {}
