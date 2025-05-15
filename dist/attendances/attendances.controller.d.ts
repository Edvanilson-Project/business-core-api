import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
export declare class AttendancesController {
    private readonly attendancesService;
    constructor(attendancesService: AttendancesService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<CreateAttendanceDto>;
    findAll(): Promise<CreateAttendanceDto[]>;
    findOne(id: number): Promise<CreateAttendanceDto | null>;
    update(id: number, updateAttendanceDto: UpdateAttendanceDto): Promise<UpdateAttendanceDto>;
    remove(id: number): Promise<void>;
}
