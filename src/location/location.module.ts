import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { Location } from './entities/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from 'src/branch/entities/branch.entity';
import { BranchModule } from 'src/branch/branch.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Branch]), BranchModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
