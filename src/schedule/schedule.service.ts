import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const schedule = this.scheduleRepository.create(createScheduleDto);
    return await this.scheduleRepository.save(schedule);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async findOne(id: number): Promise<Schedule | null> {
    return await this.scheduleRepository.findOne({
      where: { id },
    });
  }

  async findOneOrFail(id: number): Promise<Schedule> {
    const schedule = await this.scheduleRepository.findOneOrFail({
      where: { id },
    });
    if (!schedule) {
      throw new Error(`Schedule with id ${id} not found`);
    }
    return schedule;
  }

  async update(
    id: number,
    updateScheduleDto: UpdateScheduleDto,
  ): Promise<Schedule> {
    const schedule = await this.findOneOrFail(id);

    Object.assign(schedule, updateScheduleDto);
    return await this.scheduleRepository.save(schedule);
  }

  async remove(id: number): Promise<void> {
    const schedule = await this.findOneOrFail(id);

    await this.scheduleRepository.remove(schedule);
  }
}
