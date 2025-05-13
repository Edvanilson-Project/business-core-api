import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepo: Repository<Department>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department = this.departmentRepo.create(createDepartmentDto);
    return this.departmentRepo.save(department);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepo.find();
  }

  async findOne(id: number): Promise<Department | null> {
    return this.departmentRepo.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<Department> {
    const department = await this.departmentRepo.findOne({ where: { id } });

    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    return department;
  }

  async update(
    id: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department = await this.findOneOrFail(id);

    Object.assign(department, updateDepartmentDto);
    return this.departmentRepo.save(department);
  }

  async remove(id: number): Promise<void> {
    const department = await this.findOneOrFail(id);

    await this.departmentRepo.remove(department);
  }
}
