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
exports.Position = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const department_entity_1 = require("../../department/entities/department.entity");
const employee_position_entity_1 = require("../../employee-position/entities/employee-position.entity");
const typeorm_1 = require("typeorm");
let Position = class Position extends base_entity_1.BaseEntity {
    name;
    description;
    level;
    requirements;
    department;
    employeePositions;
};
exports.Position = Position;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Position.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.positions, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'departmentId' }),
    __metadata("design:type", department_entity_1.Department)
], Position.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_position_entity_1.EmployeePosition, (employeePosition) => employeePosition.position),
    __metadata("design:type", Array)
], Position.prototype, "employeePositions", void 0);
exports.Position = Position = __decorate([
    (0, typeorm_1.Entity)()
], Position);
//# sourceMappingURL=position.entity.js.map