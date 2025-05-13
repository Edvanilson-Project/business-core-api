import { Injectable, NotFoundException } from '@nestjs/common';
import { Branch } from './entities/branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepo: Repository<Branch>,

    private readonly companyService: CompanyService,
  ) {}
  async create(createBranchDto: CreateBranchDto): Promise<Branch> {
    await this.companyService.findOneOrFail(createBranchDto.companyId);

    await this.findByNameAndCompanyIdOrFailIfExists(
      createBranchDto.name,
      createBranchDto.companyId,
    );

    const branchs = this.branchRepo.create(createBranchDto);
    return this.branchRepo.save(branchs);
  }

  async findAll(): Promise<Branch[]> {
    return this.branchRepo.find();
  }

  async findOne(id: number): Promise<Branch | null> {
    return await this.branchRepo.findOne({ where: { id } });
  }

  async findOneOrFail(id: number): Promise<Branch> {
    const branch = await this.branchRepo.findOne({ where: { id } });

    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }

    return branch;
  }

  async findByNameAndCompanyIdOrFail(
    name: string,
    companyId: number,
  ): Promise<Branch> {
    const branch = await this.branchRepo.findOne({
      where: { name, companyId },
    });

    if (!branch) {
      throw new NotFoundException(
        `Branch with name "${name}" and company ID ${companyId} not found`,
      );
    }

    return branch;
  }

  async findByNameAndCompanyIdOrFailIfExists(
    name: string,
    companyId: number,
  ): Promise<void> {
    const branch = await this.branchRepo.findOne({
      where: { name, companyId },
    });

    if (branch) {
      throw new NotFoundException(
        `Branch with name "${name}" and company ID ${companyId} already exists`,
      );
    }
  }

  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOneOrFail(id);

    Object.assign(branch, updateBranchDto);
    return this.branchRepo.save(branch);
  }

  async remove(id: number): Promise<void> {
    const branch = await this.findOneOrFail(id);

    await this.branchRepo.remove(branch);
  }
}
