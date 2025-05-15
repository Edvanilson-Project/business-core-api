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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_entity_1 = require("./entities/schedule.entity");
const typeorm_2 = require("typeorm");
let ScheduleService = class ScheduleService {
    scheduleRepository;
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async create(createScheduleDto) {
        const schedule = this.scheduleRepository.create(createScheduleDto);
        return await this.scheduleRepository.save(schedule);
    }
    async findAll() {
        return await this.scheduleRepository.find();
    }
    async findOne(id) {
        return await this.scheduleRepository.findOne({
            where: { id },
        });
    }
    async findOneOrFail(id) {
        const schedule = await this.scheduleRepository.findOneOrFail({
            where: { id },
        });
        if (!schedule) {
            throw new Error(`Schedule with id ${id} not found`);
        }
        return schedule;
    }
    async update(id, updateScheduleDto) {
        const schedule = await this.findOneOrFail(id);
        Object.assign(schedule, updateScheduleDto);
        return await this.scheduleRepository.save(schedule);
    }
    async remove(id) {
        const schedule = await this.findOneOrFail(id);
        await this.scheduleRepository.remove(schedule);
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map