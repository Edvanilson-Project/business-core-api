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
exports.Employee = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const employee_position_entity_1 = require("../../employee-position/entities/employee-position.entity");
const typeorm_1 = require("typeorm");
const employee_location_entity_1 = require("../../employee-location/entities/employee-location.entity");
let Employee = class Employee extends base_entity_1.BaseEntity {
    registrationNumber;
    name;
    email;
    cpf;
    rg;
    issuingAuthority;
    pis;
    workCardNumber;
    workCardSeries;
    nationality;
    birthDate;
    maritalStatus;
    educationLevel;
    voterRegistration;
    driverLicense;
    driverLicenseCategory;
    driverLicenseExpiration;
    address;
    city;
    state;
    bankName;
    bankAccountNumber;
    bankAgencyNumber;
    healthInsurance;
    hireDate;
    terminationDate;
    isActive;
    employeePositions;
    employeeLocations;
};
exports.Employee = Employee;
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unique: true, nullable: false }),
    __metadata("design:type", Number)
], Employee.prototype, "registrationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 14, unique: true, nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 12, unique: true, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "rg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "issuingAuthority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 11, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "pis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "workCardNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "workCardSeries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Employee.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "maritalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "educationLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "voterRegistration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "driverLicense", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "driverLicenseCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Employee.prototype, "driverLicenseExpiration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "bankAccountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "bankAgencyNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "healthInsurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Employee.prototype, "hireDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Employee.prototype, "terminationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Employee.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_position_entity_1.EmployeePosition, (employeePosition) => employeePosition.employee),
    __metadata("design:type", Array)
], Employee.prototype, "employeePositions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_location_entity_1.EmployeeLocation, (empLoc) => empLoc.employee),
    __metadata("design:type", Array)
], Employee.prototype, "employeeLocations", void 0);
exports.Employee = Employee = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
//# sourceMappingURL=employee.entity.js.map