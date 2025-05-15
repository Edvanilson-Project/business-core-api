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
exports.ScheduleShiftController = void 0;
const common_1 = require("@nestjs/common");
const schedule_shift_service_1 = require("./schedule-shift.service");
const create_schedule_shift_dto_1 = require("./dto/create-schedule-shift.dto");
const update_schedule_shift_dto_1 = require("./dto/update-schedule-shift.dto");
let ScheduleShiftController = class ScheduleShiftController {
    scheduleShiftService;
    constructor(scheduleShiftService) {
        this.scheduleShiftService = scheduleShiftService;
    }
    async create(createScheduleShiftDto) {
        return await this.scheduleShiftService.create(createScheduleShiftDto);
    }
    async findAll() {
        return await this.scheduleShiftService.findAll();
    }
    async findOne(id) {
        return await this.scheduleShiftService.findOne(+id);
    }
    async update(id, updateScheduleShiftDto) {
        return await this.scheduleShiftService.update(+id, updateScheduleShiftDto);
    }
    async remove(id) {
        return await this.scheduleShiftService.remove(+id);
    }
};
exports.ScheduleShiftController = ScheduleShiftController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_schedule_shift_dto_1.CreateScheduleShiftDto]),
    __metadata("design:returntype", Promise)
], ScheduleShiftController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleShiftController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScheduleShiftController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_schedule_shift_dto_1.UpdateScheduleShiftDto]),
    __metadata("design:returntype", Promise)
], ScheduleShiftController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScheduleShiftController.prototype, "remove", null);
exports.ScheduleShiftController = ScheduleShiftController = __decorate([
    (0, common_1.Controller)('schedule-shift'),
    __metadata("design:paramtypes", [schedule_shift_service_1.ScheduleShiftService])
], ScheduleShiftController);
//# sourceMappingURL=schedule-shift.controller.js.map