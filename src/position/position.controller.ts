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
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  async create(
    @Body() createPositionDto: CreatePositionDto,
  ): Promise<CreatePositionDto> {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  async findAll(): Promise<CreatePositionDto[]> {
    return this.positionService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreatePositionDto | null> {
    return this.positionService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePositionDto: UpdatePositionDto,
  ): Promise<UpdatePositionDto> {
    return this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.positionService.remove(+id);
  }
}
