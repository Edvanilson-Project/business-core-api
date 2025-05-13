import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepo: Repository<Position>,
  ) {}
  async create(createPositionDto: CreatePositionDto): Promise<Position> {
    const position = this.positionRepo.create(createPositionDto);
    return this.positionRepo.save(position);
  }

  async findAll(): Promise<Position[]> {
    return this.positionRepo.find();
  }

  async findOne(id: number): Promise<Position | null> {
    return await this.positionRepo.findOne({
      where: { id },
    });
  }

  async findOneOrFail(id: number): Promise<Position> {
    const position = await this.positionRepo.findOne({
      where: { id },
    });
    if (!position) {
      throw new Error(`Position with id ${id} not found`);
    }
    return position;
  }

  async update(
    id: number,
    updatePositionDto: UpdatePositionDto,
  ): Promise<Position> {
    const position = await this.findOneOrFail(id);

    Object.assign(position, updatePositionDto);
    return this.positionRepo.save(position);
  }

  async remove(id: number): Promise<void> {
    const position = await this.findOneOrFail(id);

    await this.positionRepo.remove(position);
  }
}
