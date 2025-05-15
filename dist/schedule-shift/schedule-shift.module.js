"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleShiftModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_shift_service_1 = require("./schedule-shift.service");
const schedule_shift_controller_1 = require("./schedule-shift.controller");
let ScheduleShiftModule = class ScheduleShiftModule {
};
exports.ScheduleShiftModule = ScheduleShiftModule;
exports.ScheduleShiftModule = ScheduleShiftModule = __decorate([
    (0, common_1.Module)({
        controllers: [schedule_shift_controller_1.ScheduleShiftController],
        providers: [schedule_shift_service_1.ScheduleShiftService],
    })
], ScheduleShiftModule);
//# sourceMappingURL=schedule-shift.module.js.map