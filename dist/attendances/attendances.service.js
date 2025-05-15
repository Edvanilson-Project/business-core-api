"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendancesService = void 0;
const common_1 = require("@nestjs/common");
const attendance_entity_1 = require("./entities/attendance.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AttendancesService = class AttendancesService {
    attendanceRepository;
    constructor(attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }
    async create(createAttendanceDto) {
        const attendance = this.attendanceRepository.create(createAttendanceDto);
        return this.attendanceRepository.save(attendance);
    }
    async findAll() {
        return this.attendanceRepository.find();
    }
    async findOne(id) {
        return this.attendanceRepository.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const attendance = await this.attendanceRepository.findOne({
            where: { id },
        });
        if (!attendance) {
            throw new common_1.NotFoundException(`Attendance with ID ${id} not found`);
        }
        return attendance;
    }
    async update(id, updateAttendanceDto) {
        const attendance = await this.findOneOrFail(id);
        Object.assign(attendance, updateAttendanceDto);
        return this.attendanceRepository.save(attendance);
    }
    async remove(id) {
        const attendance = await this.findOneOrFail(id);
        await this.attendanceRepository.remove(attendance);
    }
};
exports.AttendancesService = AttendancesService;
exports.AttendancesService = AttendancesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(attendance_entity_1.Attendance)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AttendancesService);
//# sourceMappingURL=attendances.service.js.map