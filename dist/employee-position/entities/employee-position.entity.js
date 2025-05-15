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
exports.EmployeePosition = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const employee_entity_1 = require("../../employee/entities/employee.entity");
const position_entity_1 = require("../../position/entities/position.entity");
const typeorm_1 = require("typeorm");
let EmployeePosition = class EmployeePosition extends base_entity_1.BaseEntity {
    employee;
    position;
    startDate;
    endDate;
};
exports.EmployeePosition = EmployeePosition;
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.employeePositions, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'employeeId' }),
    __metadata("design:type", employee_entity_1.Employee)
], EmployeePosition.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => position_entity_1.Position, (position) => position.employeePositions, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'positionId' }),
    __metadata("design:type", position_entity_1.Position)
], EmployeePosition.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], EmployeePosition.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EmployeePosition.prototype, "endDate", void 0);
exports.EmployeePosition = EmployeePosition = __decorate([
    (0, typeorm_1.Entity)()
], EmployeePosition);
//# sourceMappingURL=employee-position.entity.js.map