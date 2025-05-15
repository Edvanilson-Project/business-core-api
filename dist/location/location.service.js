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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const location_entity_1 = require("./entities/location.entity");
const typeorm_2 = require("typeorm");
const branch_service_1 = require("../branch/branch.service");
let LocationService = class LocationService {
    locationRepo;
    branchService;
    constructor(locationRepo, branchService) {
        this.locationRepo = locationRepo;
        this.branchService = branchService;
    }
    async create(createLocationDto) {
        await this.branchService.findOneOrFail(createLocationDto.branchId);
        await this.findByNameAndBranchIdOrFailIfExists(createLocationDto.name, createLocationDto.branchId);
        const location = this.locationRepo.create(createLocationDto);
        return this.locationRepo.save(location);
    }
    async findAll() {
        return this.locationRepo.find();
    }
    async findOne(id) {
        return this.locationRepo.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const location = await this.locationRepo.findOne({ where: { id } });
        if (!location) {
            throw new common_1.NotFoundException(`Location with ID ${id} not found`);
        }
        return location;
    }
    async findByNameAndBranchIdOrFail(name, branchId) {
        const location = await this.locationRepo.findOne({
            where: { name, branchId },
        });
        if (!location) {
            throw new common_1.NotFoundException(`Location with name "${name}" and branch ID ${branchId} not found`);
        }
        return location;
    }
    async findByNameAndBranchIdOrFailIfExists(name, branchId) {
        const location = await this.locationRepo.findOne({
            where: { name, branchId },
        });
        if (location) {
            throw new common_1.ConflictException(`Location with name "${name}" already exists for branch ID ${branchId}`);
        }
    }
    async update(id, updateLocationDto) {
        const location = await this.findOneOrFail(id);
        Object.assign(location, updateLocationDto);
        return this.locationRepo.save(location);
    }
    async remove(id) {
        const location = await this.findOneOrFail(id);
        await this.locationRepo.remove(location);
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.Location)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        branch_service_1.BranchService])
], LocationService);
//# sourceMappingURL=location.service.js.map