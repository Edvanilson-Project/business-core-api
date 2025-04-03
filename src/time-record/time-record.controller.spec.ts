import { Test, TestingModule } from '@nestjs/testing';
import { TimeRecordController } from './time-record.controller';
import { TimeRecordService } from './time-record.service';

describe('TimeRecordController', () => {
  let controller: TimeRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeRecordController],
      providers: [TimeRecordService],
    }).compile();

    controller = module.get<TimeRecordController>(TimeRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
