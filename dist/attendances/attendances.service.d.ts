import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';
import { Repository } from 'typeorm';
export declare class AttendancesService {
    private readonly attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance>;
    findAll(): Promise<Attendance[]>;
    findOne(id: number): Promise<Attendance | null>;
    findOneOrFail(id: number): Promise<Attendance>;
    update(id: number, updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance>;
    remove(id: number): Promise<void>;
}
