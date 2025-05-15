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
exports.EmployeeSchedule = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const employee_entity_1 = require("../../employee/entities/employee.entity");
const schedule_entity_1 = require("../../schedule/entities/schedule.entity");
const typeorm_1 = require("typeorm");
let EmployeeSchedule = class EmployeeSchedule extends base_entity_1.BaseEntity {
    employee;
    schedule;
    startDate;
    endDate;
};
exports.EmployeeSchedule = EmployeeSchedule;
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'employeeId' }),
    __metadata("design:type", employee_entity_1.Employee)
], EmployeeSchedule.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'scheduleId' }),
    __metadata("design:type", schedule_entity_1.Schedule)
], EmployeeSchedule.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], EmployeeSchedule.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EmployeeSchedule.prototype, "endDate", void 0);
exports.EmployeeSchedule = EmployeeSchedule = __decorate([
    (0, typeorm_1.Entity)()
], EmployeeSchedule);
//# sourceMappingURL=employee-schedule.entity.js.map