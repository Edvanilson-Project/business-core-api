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
import { EmployeeLocationService } from './employee-location.service';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';

@Controller('employee-location')
export class EmployeeLocationController {
  constructor(
    private readonly employeeLocationService: EmployeeLocationService,
  ) {}

  @Post()
  async create(
    @Body() createEmployeeLocationDto: CreateEmployeeLocationDto,
  ): Promise<CreateEmployeeLocationDto> {
    return await this.employeeLocationService.create(createEmployeeLocationDto);
  }

  @Get()
  async findAll(): Promise<CreateEmployeeLocationDto[]> {
    return await this.employeeLocationService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateEmployeeLocationDto | null> {
    return await this.employeeLocationService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeLocationDto: UpdateEmployeeLocationDto,
  ): Promise<CreateEmployeeLocationDto> {
    return await this.employeeLocationService.update(
      +id,
      updateEmployeeLocationDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.employeeLocationService.remove(+id);
  }
}
