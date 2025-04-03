import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleShiftDto } from './create-schedule-shift.dto';

export class UpdateScheduleShiftDto extends PartialType(CreateScheduleShiftDto) {}
