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
exports.EmployeeScheduleService = void 0;
const common_1 = require("@nestjs/common");
const employee_schedule_entity_1 = require("./entities/employee-schedule.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let EmployeeScheduleService = class EmployeeScheduleService {
    employeeScheduleRepo;
    constructor(employeeScheduleRepo) {
        this.employeeScheduleRepo = employeeScheduleRepo;
    }
    async create(createEmployeeScheduleDto) {
        const employeeSchedule = this.employeeScheduleRepo.create(createEmployeeScheduleDto);
        return this.employeeScheduleRepo.save(employeeSchedule);
    }
    async findAll() {
        return this.employeeScheduleRepo.find();
    }
    async findOne(id) {
        return this.employeeScheduleRepo.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const employeeSchedule = await this.employeeScheduleRepo.findOne({
            where: { id },
        });
        if (!employeeSchedule) {
            throw new Error(`EmployeeSchedule with id ${id} not found`);
        }
        return employeeSchedule;
    }
    async update(id, updateEmployeeScheduleDto) {
        const employeeSchedule = await this.findOneOrFail(id);
        Object.assign(employeeSchedule, updateEmployeeScheduleDto);
        return this.employeeScheduleRepo.save(employeeSchedule);
    }
    async remove(id) {
        const employeeSchedule = await this.findOneOrFail(id);
        await this.employeeScheduleRepo.remove(employeeSchedule);
    }
};
exports.EmployeeScheduleService = EmployeeScheduleService;
exports.EmployeeScheduleService = EmployeeScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(employee_schedule_entity_1.EmployeeSchedule)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EmployeeScheduleService);
//# sourceMappingURL=employee-schedule.service.js.map