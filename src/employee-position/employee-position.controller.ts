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
import { EmployeePositionService } from './employee-position.service';
import { CreateEmployeePositionDto } from './dto/create-employee-position.dto';
import { UpdateEmployeePositionDto } from './dto/update-employee-position.dto';
import { EmployeePosition } from './entities/employee-position.entity';

@Controller('employee-position')
export class EmployeePositionController {
  constructor(
    private readonly employeePositionService: EmployeePositionService,
  ) {}

  @Post()
  async create(
    @Body() createEmployeePositionDto: CreateEmployeePositionDto,
  ): Promise<EmployeePosition> {
    return await this.employeePositionService.create(createEmployeePositionDto);
  }

  @Get()
  async findAll(): Promise<EmployeePosition[]> {
    return await this.employeePositionService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<EmployeePosition | null> {
    return await this.employeePositionService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeePositionDto: UpdateEmployeePositionDto,
  ): Promise<EmployeePosition> {
    return await this.employeePositionService.update(
      +id,
      updateEmployeePositionDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.employeePositionService.remove(+id);
  }
}
