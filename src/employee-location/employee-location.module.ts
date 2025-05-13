import { Module } from '@nestjs/common';
import { EmployeeLocationService } from './employee-location.service';
import { EmployeeLocationController } from './employee-location.controller';

@Module({
  controllers: [EmployeeLocationController],
  providers: [EmployeeLocationService],
})
export class EmployeeLocationModule {}
