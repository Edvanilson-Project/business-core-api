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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_2 = require("@nestjs/typeorm");
let EmployeeService = class EmployeeService {
    employeeRepo;
    constructor(employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    async create(createEmployeeDto) {
        const employee = this.employeeRepo.create(createEmployeeDto);
        return this.employeeRepo.save(employee);
    }
    async findAll() {
        try {
            return await this.employeeRepo.find({
                where: { isActive: true },
                relations: ['employeePositions', 'employeeLocations'],
                order: { name: 'ASC' },
            });
        }
        catch (error) {
            console.error('Erro ao buscar funcionários:', error);
            throw new common_1.HttpException('Erro ao buscar funcionários', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        return await this.employeeRepo.findOne({
            where: { id },
            relations: ['employeePositions', 'employeeLocations'],
        });
    }
    async findByEmail(email) {
        return await this.employeeRepo.findOne({
            where: { email },
            relations: ['employeePositions', 'employeeLocations'],
        });
    }
    async findOneOrFail(id) {
        const employee = await this.employeeRepo.findOne({
            where: { id },
        });
        if (!employee) {
            throw new common_1.NotFoundException(`Funcionário com ID ${id} não encontrado`);
        }
        return employee;
    }
    async update(id, updateEmployeeDto) {
        const employee = await this.findOneOrFail(id);
        const updated = Object.assign(employee, updateEmployeeDto);
        return this.employeeRepo.save(updated);
    }
    async remove(id) {
        const employee = await this.findOneOrFail(id);
        employee.isActive = false;
        await this.employeeRepo.save(employee);
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map