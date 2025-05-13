import { Injectable } from '@nestjs/common';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';

@Injectable()
export class EmployeeLocationService {
  create(createEmployeeLocationDto: CreateEmployeeLocationDto) {
    return 'This action adds a new employeeLocation';
  }

  findAll() {
    return `This action returns all employeeLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeLocation`;
  }

  update(id: number, updateEmployeeLocationDto: UpdateEmployeeLocationDto) {
    return `This action updates a #${id} employeeLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeLocation`;
  }
}
