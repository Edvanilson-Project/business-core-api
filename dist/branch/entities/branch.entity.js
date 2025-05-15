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
exports.Branch = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const location_entity_1 = require("../../location/entities/location.entity");
const base_entity_1 = require("../../common/entities/base.entity");
const typeorm_1 = require("typeorm");
let Branch = class Branch extends base_entity_1.BaseEntity {
    company;
    companyId;
    name;
    locations;
};
exports.Branch = Branch;
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.branches),
    __metadata("design:type", company_entity_1.Company)
], Branch.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Branch.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => location_entity_1.Location, (location) => location.branch),
    __metadata("design:type", Array)
], Branch.prototype, "locations", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)()
], Branch);
//# sourceMappingURL=branch.entity.js.map