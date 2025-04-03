import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeSchedule } from 'src/employee-schedule/entities/employee-schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(EmployeeSchedule)
    private readonly employeeScheduleRepository: Repository<EmployeeSchedule>,
  ) {}

  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }

  async getGroupedSchedule(
    employeeId: number,
    startDate: string,
    endDate: string,
  ) {
    const employeeSchedules = await this.employeeScheduleRepository.find({
      where: { employee: { id: employeeId } },
      relations: [
        'employee',
        'schedule',
        'schedule.scheduleShifts',
        'schedule.scheduleShifts.shift',
      ],
    });

    const start = new Date(startDate);
    const end = new Date(endDate);
    const groupedSchedules = {};

    for (const es of employeeSchedules) {
      const employeeName = es.employee.firstName;
      const scheduleName = es.schedule.name;

      if (!groupedSchedules[employeeName]) {
        groupedSchedules[employeeName] = {};
      }

      if (!groupedSchedules[employeeName][scheduleName]) {
        groupedSchedules[employeeName][scheduleName] = {
          startTime: es.schedule.scheduleShifts[0]?.shift.startTime,
          endTime: es.schedule.scheduleShifts[0]?.shift.endTime,
          dates: [],
        };
      }

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateString = d.toISOString().split('T')[0];
        groupedSchedules[employeeName][scheduleName].dates.push(dateString);
      }
    }
    return groupedSchedules;
  }
}
