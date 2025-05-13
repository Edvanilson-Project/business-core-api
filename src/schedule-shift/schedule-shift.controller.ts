import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ScheduleShiftService } from './schedule-shift.service';
import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';
import { ScheduleShift } from './entities/schedule-shift.entity';

@Controller('schedule-shift')
export class ScheduleShiftController {
  constructor(private readonly scheduleShiftService: ScheduleShiftService) {}

  @Post()
  async create(
    @Body() createScheduleShiftDto: CreateScheduleShiftDto,
  ): Promise<ScheduleShift> {
    return this.scheduleShiftService.create(createScheduleShiftDto);
  }

  @Get()
  async findAll(): Promise<ScheduleShift[]> {
    return this.scheduleShiftService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ScheduleShift | null> {
    return this.scheduleShiftService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScheduleShiftDto: UpdateScheduleShiftDto,
  ): Promise<ScheduleShift> {
    return this.scheduleShiftService.update(+id, updateScheduleShiftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.scheduleShiftService.remove(+id);
  }
}
