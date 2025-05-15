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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleShift = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const schedule_entity_1 = require("../../schedule/entities/schedule.entity");
const shift_entity_1 = require("../../shift/entities/shift.entity");
const typeorm_1 = require("typeorm");
let ScheduleShift = class ScheduleShift extends base_entity_1.BaseEntity {
    schedule;
    shift;
};
exports.ScheduleShift = ScheduleShift;
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'scheduleId' }),
    __metadata("design:type", schedule_entity_1.Schedule)
], ScheduleShift.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shift_entity_1.Shift, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'shiftId' }),
    __metadata("design:type", shift_entity_1.Shift)
], ScheduleShift.prototype, "shift", void 0);
exports.ScheduleShift = ScheduleShift = __decorate([
    (0, typeorm_1.Entity)()
], ScheduleShift);
//# sourceMappingURL=schedule-shift.entity.js.map