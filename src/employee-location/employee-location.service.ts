import { Injectable } from '@nestjs/common';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';
import { EmployeeLocation } from './entities/employee-location.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeLocationService {
  constructor(
    @InjectRepository(EmployeeLocation)
    private readonly employeeLocationRepository: Repository<EmployeeLocation>,
  ) {}
  async create(
    createEmployeeLocationDto: CreateEmployeeLocationDto,
  ): Promise<EmployeeLocation> {
    const employeeLocation = this.employeeLocationRepository.create(
      createEmployeeLocationDto,
    );
    return this.employeeLocationRepository.save(employeeLocation);
  }

  async findAll(): Promise<EmployeeLocation[]> {
    return this.employeeLocationRepository.find();
  }

  async findOne(id: number): Promise<EmployeeLocation | null> {
    return this.employeeLocationRepository.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<EmployeeLocation> {
    const employeeLocation = await this.employeeLocationRepository.findOne({
      where: { id },
    });

    if (!employeeLocation) {
      throw new Error(`EmployeeLocation with id ${id} not found`);
    }

    return employeeLocation;
  }

  async update(
    id: number,
    updateEmployeeLocationDto: UpdateEmployeeLocationDto,
  ): Promise<EmployeeLocation> {
    const employeeLocation = await this.findOneOrFail(id);

    Object.assign(employeeLocation, updateEmployeeLocationDto);
    return this.employeeLocationRepository.save(employeeLocation);
  }

  async remove(id: number): Promise<void> {
    const employeeLocation = await this.findOneOrFail(id);
    await this.employeeLocationRepository.remove(employeeLocation);
  }
}
