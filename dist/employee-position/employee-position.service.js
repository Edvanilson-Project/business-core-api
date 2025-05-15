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
exports.EmployeePositionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_position_entity_1 = require("./entities/employee-position.entity");
const typeorm_2 = require("typeorm");
let EmployeePositionService = class EmployeePositionService {
    employeePositionRepository;
    constructor(employeePositionRepository) {
        this.employeePositionRepository = employeePositionRepository;
    }
    async create(createEmployeePositionDto) {
        const employeePosition = this.employeePositionRepository.create(createEmployeePositionDto);
        return this.employeePositionRepository.save(employeePosition);
    }
    async findAll() {
        return this.employeePositionRepository.find();
    }
    async findOne(id) {
        return this.employeePositionRepository.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const employeePosition = await this.employeePositionRepository.findOne({
            where: { id },
        });
        if (!employeePosition) {
            throw new Error(`EmployeePosition with id ${id} not found`);
        }
        return employeePosition;
    }
    async update(id, updateEmployeePositionDto) {
        const employeePosition = await this.findOneOrFail(id);
        Object.assign(employeePosition, updateEmployeePositionDto);
        return this.employeePositionRepository.save(employeePosition);
    }
    async remove(id) {
        const employeePosition = await this.findOneOrFail(id);
        await this.employeePositionRepository.remove(employeePosition);
    }
};
exports.EmployeePositionService = EmployeePositionService;
exports.EmployeePositionService = EmployeePositionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_position_entity_1.EmployeePosition)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeePositionService);
//# sourceMappingURL=employee-position.service.js.map