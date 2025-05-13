import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeLocationService } from './employee-location.service';

describe('EmployeeLocationService', () => {
  let service: EmployeeLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeLocationService],
    }).compile();

    service = module.get<EmployeeLocationService>(EmployeeLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
