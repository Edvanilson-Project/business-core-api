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
exports.ScheduleShiftService = void 0;
const common_1 = require("@nestjs/common");
const schedule_shift_entity_1 = require("./entities/schedule-shift.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ScheduleShiftService = class ScheduleShiftService {
    scheduleShiftRepository;
    constructor(scheduleShiftRepository) {
        this.scheduleShiftRepository = scheduleShiftRepository;
    }
    async create(createScheduleShiftDto) {
        const scheduleShift = this.scheduleShiftRepository.create(createScheduleShiftDto);
        return await this.scheduleShiftRepository.save(scheduleShift);
    }
    async findAll() {
        return await this.scheduleShiftRepository.find();
    }
    async findOne(id) {
        return await this.scheduleShiftRepository.findOne({
            where: { id },
        });
    }
    async findOneOrFail(id) {
        const scheduleShift = await this.scheduleShiftRepository.findOne({
            where: { id },
        });
        if (!scheduleShift) {
            throw new Error(`ScheduleShift with id ${id} not found`);
        }
        return scheduleShift;
    }
    async update(id, updateScheduleShiftDto) {
        const scheduleShift = await this.findOneOrFail(id);
        Object.assign(scheduleShift, updateScheduleShiftDto);
        return await this.scheduleShiftRepository.save(scheduleShift);
    }
    async remove(id) {
        const scheduleShift = await this.findOneOrFail(id);
        await this.scheduleShiftRepository.remove(scheduleShift);
    }
};
exports.ScheduleShiftService = ScheduleShiftService;
exports.ScheduleShiftService = ScheduleShiftService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(schedule_shift_entity_1.ScheduleShift)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ScheduleShiftService);
//# sourceMappingURL=schedule-shift.service.js.map