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
exports.EmployeeLocationController = void 0;
const common_1 = require("@nestjs/common");
const employee_location_service_1 = require("./employee-location.service");
const create_employee_location_dto_1 = require("./dto/create-employee-location.dto");
const update_employee_location_dto_1 = require("./dto/update-employee-location.dto");
let EmployeeLocationController = class EmployeeLocationController {
    employeeLocationService;
    constructor(employeeLocationService) {
        this.employeeLocationService = employeeLocationService;
    }
    async create(createEmployeeLocationDto) {
        return await this.employeeLocationService.create(createEmployeeLocationDto);
    }
    async findAll() {
        return await this.employeeLocationService.findAll();
    }
    async findOne(id) {
        return await this.employeeLocationService.findOne(+id);
    }
    async update(id, updateEmployeeLocationDto) {
        return await this.employeeLocationService.update(+id, updateEmployeeLocationDto);
    }
    async remove(id) {
        return await this.employeeLocationService.remove(+id);
    }
};
exports.EmployeeLocationController = EmployeeLocationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_location_dto_1.CreateEmployeeLocationDto]),
    __metadata("design:returntype", Promise)
], EmployeeLocationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLocationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeLocationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_employee_location_dto_1.UpdateEmployeeLocationDto]),
    __metadata("design:returntype", Promise)
], EmployeeLocationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeLocationController.prototype, "remove", null);
exports.EmployeeLocationController = EmployeeLocationController = __decorate([
    (0, common_1.Controller)('employee-location'),
    __metadata("design:paramtypes", [employee_location_service_1.EmployeeLocationService])
], EmployeeLocationController);
//# sourceMappingURL=employee-location.controller.js.map