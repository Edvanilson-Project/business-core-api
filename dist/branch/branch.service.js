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
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const branch_entity_1 = require("./entities/branch.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const company_service_1 = require("../company/company.service");
let BranchService = class BranchService {
    branchRepo;
    companyService;
    constructor(branchRepo, companyService) {
        this.branchRepo = branchRepo;
        this.companyService = companyService;
    }
    async create(createBranchDto) {
        await this.companyService.findOneOrFail(createBranchDto.companyId);
        await this.findByNameAndCompanyIdOrFailIfExists(createBranchDto.name, createBranchDto.companyId);
        const branchs = this.branchRepo.create(createBranchDto);
        return this.branchRepo.save(branchs);
    }
    async findAll() {
        return this.branchRepo.find();
    }
    async findOne(id) {
        return await this.branchRepo.findOne({ where: { id } });
    }
    async findOneOrFail(id) {
        const branch = await this.branchRepo.findOne({ where: { id } });
        if (!branch) {
            throw new common_1.NotFoundException(`Branch with ID ${id} not found`);
        }
        return branch;
    }
    async findByNameAndCompanyIdOrFail(name, companyId) {
        const branch = await this.branchRepo.findOne({
            where: { name, companyId },
        });
        if (!branch) {
            throw new common_1.NotFoundException(`Branch with name "${name}" and company ID ${companyId} not found`);
        }
        return branch;
    }
    async findByNameAndCompanyIdOrFailIfExists(name, companyId) {
        const branch = await this.branchRepo.findOne({
            where: { name, companyId },
        });
        if (branch) {
            throw new common_1.NotFoundException(`Branch with name "${name}" and company ID ${companyId} already exists`);
        }
    }
    async update(id, updateBranchDto) {
        const branch = await this.findOneOrFail(id);
        Object.assign(branch, updateBranchDto);
        return this.branchRepo.save(branch);
    }
    async remove(id) {
        const branch = await this.findOneOrFail(id);
        await this.branchRepo.remove(branch);
    }
};
exports.BranchService = BranchService;
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        company_service_1.CompanyService])
], BranchService);
//# sourceMappingURL=branch.service.js.map