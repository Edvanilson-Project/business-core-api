import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
  ) {}
  create(createCompanyDto: CreateCompanyDto[]): Promise<Company[]> {
    const company = this.companyRepo.create(createCompanyDto);
    return this.companyRepo.save(company);
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepo.find();
  }

  async findOne(id: number): Promise<Company | null> {
    return await this.companyRepo.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<Company> {
    const company = await this.companyRepo.findOne({ where: { id } });

    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.findOneOrFail(id);

    Object.assign(company, updateCompanyDto);
    return this.companyRepo.save(company);
  }

  async remove(id: number): Promise<void> {
    const company = await this.findOneOrFail(id);

    await this.companyRepo.remove(company);
  }
}
