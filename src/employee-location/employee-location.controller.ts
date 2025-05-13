import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeLocationService } from './employee-location.service';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';

@Controller('employee-location')
export class EmployeeLocationController {
  constructor(private readonly employeeLocationService: EmployeeLocationService) {}

  @Post()
  create(@Body() createEmployeeLocationDto: CreateEmployeeLocationDto) {
    return this.employeeLocationService.create(createEmployeeLocationDto);
  }

  @Get()
  findAll() {
    return this.employeeLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeLocationDto: UpdateEmployeeLocationDto) {
    return this.employeeLocationService.update(+id, updateEmployeeLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeLocationService.remove(+id);
  }
}
