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
exports.EmployeePositionController = void 0;
const common_1 = require("@nestjs/common");
const employee_position_service_1 = require("./employee-position.service");
const create_employee_position_dto_1 = require("./dto/create-employee-position.dto");
const update_employee_position_dto_1 = require("./dto/update-employee-position.dto");
let EmployeePositionController = class EmployeePositionController {
    employeePositionService;
    constructor(employeePositionService) {
        this.employeePositionService = employeePositionService;
    }
    async create(createEmployeePositionDto) {
        return await this.employeePositionService.create(createEmployeePositionDto);
    }
    async findAll() {
        return await this.employeePositionService.findAll();
    }
    async findOne(id) {
        return await this.employeePositionService.findOne(+id);
    }
    async update(id, updateEmployeePositionDto) {
        return await this.employeePositionService.update(+id, updateEmployeePositionDto);
    }
    async remove(id) {
        return await this.employeePositionService.remove(+id);
    }
};
exports.EmployeePositionController = EmployeePositionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_position_dto_1.CreateEmployeePositionDto]),
    __metadata("design:returntype", Promise)
], EmployeePositionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeePositionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeePositionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_employee_position_dto_1.UpdateEmployeePositionDto]),
    __metadata("design:returntype", Promise)
], EmployeePositionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeePositionController.prototype, "remove", null);
exports.EmployeePositionController = EmployeePositionController = __decorate([
    (0, common_1.Controller)('employee-position'),
    __metadata("design:paramtypes", [employee_position_service_1.EmployeePositionService])
], EmployeePositionController);
//# sourceMappingURL=employee-position.controller.js.map