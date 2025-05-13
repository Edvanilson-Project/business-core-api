import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Company } from 'src/company/entities/company.entity';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [TypeOrmModule.forFeature([Branch, Company]), CompanyModule],
  controllers: [BranchController],
  providers: [BranchService],
  exports: [CompanyModule],
})
export class BranchModule {}
