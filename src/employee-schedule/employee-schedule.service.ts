import { Injectable } from '@nestjs/common';
import { CreateEmployeeScheduleDto } from './dto/create-employee-schedule.dto';
import { UpdateEmployeeScheduleDto } from './dto/update-employee-schedule.dto';
import { EmployeeSchedule } from './entities/employee-schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeScheduleService {
  constructor(
    @InjectRepository(EmployeeSchedule)
    private readonly employeeScheduleRepo: Repository<EmployeeSchedule>,
  ) {}

  async create(
    createEmployeeScheduleDto: CreateEmployeeScheduleDto,
  ): Promise<EmployeeSchedule> {
    const employeeSchedule = this.employeeScheduleRepo.create(
      createEmployeeScheduleDto,
    );
    return this.employeeScheduleRepo.save(employeeSchedule);
  }

  async findAll(): Promise<EmployeeSchedule[]> {
    return this.employeeScheduleRepo.find();
  }

  async findOne(id: number): Promise<EmployeeSchedule | null> {
    return this.employeeScheduleRepo.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<EmployeeSchedule> {
    const employeeSchedule = await this.employeeScheduleRepo.findOne({
      where: { id },
    });
    if (!employeeSchedule) {
      throw new Error(`EmployeeSchedule with id ${id} not found`);
    }
    return employeeSchedule;
  }

  async update(
    id: number,
    updateEmployeeScheduleDto: UpdateEmployeeScheduleDto,
  ): Promise<EmployeeSchedule> {
    const employeeSchedule = await this.findOneOrFail(id);

    Object.assign(employeeSchedule, updateEmployeeScheduleDto);
    return this.employeeScheduleRepo.save(employeeSchedule);
  }

  async remove(id: number): Promise<void> {
    const employeeSchedule = await this.findOneOrFail(id);
    await this.employeeScheduleRepo.remove(employeeSchedule);
  }
}
