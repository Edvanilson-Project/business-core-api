import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shift } from './entities/shift.entity';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shift)
    private readonly shiftRepository: Repository<Shift>,
  ) {}
  async create(createShiftDto: CreateShiftDto): Promise<Shift> {
    const shift = this.shiftRepository.create(createShiftDto);
    return await this.shiftRepository.save(shift);
  }

  async findAll(): Promise<Shift[]> {
    return await this.shiftRepository.find();
  }

  async findOne(id: number): Promise<Shift | null> {
    return await this.shiftRepository.findOne({
      where: { id },
    });
  }

  async findOneOrFail(id: number): Promise<Shift> {
    return await this.shiftRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift> {
    const shift = await this.findOneOrFail(id);

    Object.assign(shift, updateShiftDto);
    return await this.shiftRepository.save(shift);
  }

  async remove(id: number): Promise<void> {
    const shift = await this.findOneOrFail(id);

    await this.shiftRepository.remove(shift);
  }
}
