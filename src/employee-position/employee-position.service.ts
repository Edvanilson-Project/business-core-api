import { Injectable } from '@nestjs/common';
import { CreateEmployeePositionDto } from './dto/create-employee-position.dto';
import { UpdateEmployeePositionDto } from './dto/update-employee-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeePosition } from './entities/employee-position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeePositionService {
  constructor(
    @InjectRepository(EmployeePosition)
    private readonly employeePositionRepository: Repository<EmployeePosition>,
  ) {}
  async create(
    createEmployeePositionDto: CreateEmployeePositionDto,
  ): Promise<EmployeePosition> {
    const employeePosition = this.employeePositionRepository.create(
      createEmployeePositionDto,
    );
    return this.employeePositionRepository.save(employeePosition);
  }

  async findAll(): Promise<EmployeePosition[]> {
    return this.employeePositionRepository.find();
  }

  async findOne(id: number): Promise<EmployeePosition | null> {
    return this.employeePositionRepository.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<EmployeePosition> {
    const employeePosition = await this.employeePositionRepository.findOne({
      where: { id },
    });

    if (!employeePosition) {
      throw new Error(`EmployeePosition with id ${id} not found`);
    }

    return employeePosition;
  }

  async update(
    id: number,
    updateEmployeePositionDto: UpdateEmployeePositionDto,
  ): Promise<EmployeePosition> {
    const employeePosition = await this.findOneOrFail(id);

    Object.assign(employeePosition, updateEmployeePositionDto);
    return this.employeePositionRepository.save(employeePosition);
  }

  async remove(id: number): Promise<void> {
    const employeePosition = await this.findOneOrFail(id);
    await this.employeePositionRepository.remove(employeePosition);
  }
}
