import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleShiftController } from './schedule-shift.controller';
import { ScheduleShiftService } from './schedule-shift.service';

describe('ScheduleShiftController', () => {
  let controller: ScheduleShiftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleShiftController],
      providers: [ScheduleShiftService],
    }).compile();

    controller = module.get<ScheduleShiftController>(ScheduleShiftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
