import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from './entities/salary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private readonly salaryRepo: Repository<Salary>,
  ) {}
  async create(createSalaryDto: CreateSalaryDto): Promise<Salary> {
    const salary = this.salaryRepo.create(createSalaryDto);
    return this.salaryRepo.save(salary);
  }

  async findAll(): Promise<Salary[]> {
    return this.salaryRepo.find();
  }

  async findOne(id: number): Promise<Salary | null> {
    return await this.salaryRepo.findOne({
      where: { id },
    });
  }

  async findOneOrFail(id: number): Promise<Salary> {
    const salary = await this.salaryRepo.findOne({
      where: { id },
    });
    if (!salary) {
      throw new Error(`Salary with id ${id} not found`);
    }
    return salary;
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto): Promise<Salary> {
    const salary = await this.findOneOrFail(id);

    Object.assign(salary, updateSalaryDto);
    return this.salaryRepo.save(salary);
  }

  async remove(id: number): Promise<void> {
    const salary = await this.findOneOrFail(id);
    await this.salaryRepo.remove(salary);
  }
}
