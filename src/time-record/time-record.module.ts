import { Module } from '@nestjs/common';
import { TimeRecordService } from './time-record.service';
import { TimeRecordController } from './time-record.controller';

@Module({
  controllers: [TimeRecordController],
  providers: [TimeRecordService],
})
export class TimeRecordModule {}
