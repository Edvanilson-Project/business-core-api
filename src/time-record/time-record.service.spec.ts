import { Test, TestingModule } from '@nestjs/testing';
import { TimeRecordService } from './time-record.service';

describe('TimeRecordService', () => {
  let service: TimeRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeRecordService],
    }).compile();

    service = module.get<TimeRecordService>(TimeRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
