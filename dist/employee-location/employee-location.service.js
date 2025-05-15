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
exports.EmployeeLocationService = void 0;
const common_1 = require("@nestjs/common");
const employee_location_entity_1 = require("./entities/employee-location.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let EmployeeLocationService = class EmployeeLocationService {
    employeeLocationRepository;
    constructor(employeeLocationRepository) {
        this.employeeLocationRepository = employeeLocationRepository;
    }
    async create(createEmployeeLocationDto) {
        const employeeLocation = this.employeeLocationRepository.create(createEmployeeLocationDto);
        return this.employeeLocationRepository.save(employeeLocation);
    }
    async findAll() {
        return this.employeeLocationRepository.find();
    }
    async findOne(id) {
        return this.employeeLocationRepository.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const employeeLocation = await this.employeeLocationRepository.findOne({
            where: { id },
        });
        if (!employeeLocation) {
            throw new Error(`EmployeeLocation with id ${id} not found`);
        }
        return employeeLocation;
    }
    async update(id, updateEmployeeLocationDto) {
        const employeeLocation = await this.findOneOrFail(id);
        Object.assign(employeeLocation, updateEmployeeLocationDto);
        return this.employeeLocationRepository.save(employeeLocation);
    }
    async remove(id) {
        const employeeLocation = await this.findOneOrFail(id);
        await this.employeeLocationRepository.remove(employeeLocation);
    }
};
exports.EmployeeLocationService = EmployeeLocationService;
exports.EmployeeLocationService = EmployeeLocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(employee_location_entity_1.EmployeeLocation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EmployeeLocationService);
//# sourceMappingURL=employee-location.service.js.map