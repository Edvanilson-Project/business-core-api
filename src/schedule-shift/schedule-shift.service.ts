import { Injectable } from '@nestjs/common';
import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';

@Injectable()
export class ScheduleShiftService {
  create(createScheduleShiftDto: CreateScheduleShiftDto) {
    return 'This action adds a new scheduleShift';
  }

  findAll() {
    return `This action returns all scheduleShift`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduleShift`;
  }

  update(id: number, updateScheduleShiftDto: UpdateScheduleShiftDto) {
    return `This action updates a #${id} scheduleShift`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleShift`;
  }
}
