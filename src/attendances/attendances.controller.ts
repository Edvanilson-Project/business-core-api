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
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  async create(
    @Body() createAttendanceDto: CreateAttendanceDto,
  ): Promise<CreateAttendanceDto> {
    return await this.attendancesService.create(createAttendanceDto);
  }

  @Get()
  async findAll(): Promise<CreateAttendanceDto[]> {
    return await this.attendancesService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateAttendanceDto | null> {
    return await this.attendancesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<UpdateAttendanceDto> {
    return await this.attendancesService.update(+id, updateAttendanceDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.attendancesService.remove(+id);
  }
}
