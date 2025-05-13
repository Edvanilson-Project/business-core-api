import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeScheduleService } from './employee-schedule.service';
import { CreateEmployeeScheduleDto } from './dto/create-employee-schedule.dto';
import { UpdateEmployeeScheduleDto } from './dto/update-employee-schedule.dto';

@Controller('employee-schedule')
export class EmployeeScheduleController {
  constructor(private readonly employeeScheduleService: EmployeeScheduleService) {}

  @Post()
  create(@Body() createEmployeeScheduleDto: CreateEmployeeScheduleDto) {
    return this.employeeScheduleService.create(createEmployeeScheduleDto);
  }

  @Get()
  findAll() {
    return this.employeeScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeScheduleDto: UpdateEmployeeScheduleDto) {
    return this.employeeScheduleService.update(+id, updateEmployeeScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeScheduleService.remove(+id);
  }
}
