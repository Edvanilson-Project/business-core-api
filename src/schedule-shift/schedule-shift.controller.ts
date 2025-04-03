import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleShiftService } from './schedule-shift.service';
import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';

@Controller('schedule-shift')
export class ScheduleShiftController {
  constructor(private readonly scheduleShiftService: ScheduleShiftService) {}

  @Post()
  create(@Body() createScheduleShiftDto: CreateScheduleShiftDto) {
    return this.scheduleShiftService.create(createScheduleShiftDto);
  }

  @Get()
  findAll() {
    return this.scheduleShiftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleShiftService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleShiftDto: UpdateScheduleShiftDto) {
    return this.scheduleShiftService.update(+id, updateScheduleShiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleShiftService.remove(+id);
  }
}
