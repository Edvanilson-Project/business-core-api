import { Module } from '@nestjs/common';
import { EmployeeModule } from '../employee/employee.module';
import { PositionModule } from '../position/position.module';
import { SalaryModule } from '../salary/salary.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'src/department/entities/department.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { EmployeePosition } from 'src/employee-position/entities/employee-position.entity';
import { Position } from 'src/position/entities/position.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { Shift } from 'src/shift/entities/shift.entity';
import { EmployeeSchedule } from 'src/employee-schedule/entities/employee-schedule.entity';
import { ScheduleShift } from 'src/schedule-shift/entities/schedule-shift.entity';
import { Company } from 'src/company/entities/company.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Location } from 'src/location/entities/location.entity';
import { Attendance } from 'src/attendances/entities/attendance.entity';
import { TimeRecord } from 'src/time-record/entities/time-record.entity';

@Module({
  imports: [
    PositionModule,
    SalaryModule,
    EmployeeModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '03857935537',
      database: 'postgres',
      entities: [
        Department,
        Employee,
        EmployeePosition,
        Position,
        Salary,
        Schedule,
        Shift,
        EmployeeSchedule,
        ScheduleShift,
        Company,
        Branch,
        Location,
        Attendance,
        TimeRecord,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
