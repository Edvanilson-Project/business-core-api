import { Injectable } from '@nestjs/common';
import { CreateScheduleShiftDto } from './dto/create-schedule-shift.dto';
import { UpdateScheduleShiftDto } from './dto/update-schedule-shift.dto';
import { ScheduleShift } from './entities/schedule-shift.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScheduleShiftService {
  constructor(
    @InjectRepository(ScheduleShift)
    private readonly scheduleShiftRepository: Repository<ScheduleShift>,
  ) {}

  async create(
    createScheduleShiftDto: CreateScheduleShiftDto,
  ): Promise<ScheduleShift> {
    const scheduleShift = this.scheduleShiftRepository.create(
      createScheduleShiftDto,
    );
    return await this.scheduleShiftRepository.save(scheduleShift);
  }

  async findAll(): Promise<ScheduleShift[]> {
    return await this.scheduleShiftRepository.find();
  }

  async findOne(id: number): Promise<ScheduleShift | null> {
    return await this.scheduleShiftRepository.findOne({
      where: { id },
    });
  }

  async findOneOrFail(id: number): Promise<ScheduleShift> {
    const scheduleShift = await this.scheduleShiftRepository.findOne({
      where: { id },
    });

    if (!scheduleShift) {
      throw new Error(`ScheduleShift with id ${id} not found`);
    }
    return scheduleShift;
  }

  async update(
    id: number,
    updateScheduleShiftDto: UpdateScheduleShiftDto,
  ): Promise<ScheduleShift> {
    const scheduleShift = await this.findOneOrFail(id);

    Object.assign(scheduleShift, updateScheduleShiftDto);
    return await this.scheduleShiftRepository.save(scheduleShift);
  }

  async remove(id: number): Promise<void> {
    const scheduleShift = await this.findOneOrFail(id);

    await this.scheduleShiftRepository.remove(scheduleShift);
  }
}
