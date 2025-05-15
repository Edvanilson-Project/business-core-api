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
exports.Schedule = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const schedule_shift_entity_1 = require("../../schedule-shift/entities/schedule-shift.entity");
const typeorm_1 = require("typeorm");
let Schedule = class Schedule extends base_entity_1.BaseEntity {
    name;
    description;
    scheduleShifts;
};
exports.Schedule = Schedule;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Schedule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Schedule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => schedule_shift_entity_1.ScheduleShift, (scheduleShift) => scheduleShift.schedule),
    __metadata("design:type", Array)
], Schedule.prototype, "scheduleShifts", void 0);
exports.Schedule = Schedule = __decorate([
    (0, typeorm_1.Entity)()
], Schedule);
//# sourceMappingURL=schedule.entity.js.map