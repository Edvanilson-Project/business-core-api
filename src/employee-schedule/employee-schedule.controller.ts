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
import { EmployeeScheduleService } from './employee-schedule.service';
import { CreateEmployeeScheduleDto } from './dto/create-employee-schedule.dto';
import { UpdateEmployeeScheduleDto } from './dto/update-employee-schedule.dto';
import { EmployeeSchedule } from './entities/employee-schedule.entity';

@Controller('employee-schedule')
export class EmployeeScheduleController {
  constructor(
    private readonly employeeScheduleService: EmployeeScheduleService,
  ) {}

  @Post()
  async create(
    @Body() createEmployeeScheduleDto: CreateEmployeeScheduleDto,
  ): Promise<EmployeeSchedule> {
    return await this.employeeScheduleService.create(createEmployeeScheduleDto);
  }

  @Get()
  async findAll(): Promise<EmployeeSchedule[]> {
    return await this.employeeScheduleService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<EmployeeSchedule | null> {
    return await this.employeeScheduleService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeScheduleDto: UpdateEmployeeScheduleDto,
  ): Promise<EmployeeSchedule> {
    return await this.employeeScheduleService.update(
      +id,
      updateEmployeeScheduleDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.employeeScheduleService.remove(+id);
  }
}
