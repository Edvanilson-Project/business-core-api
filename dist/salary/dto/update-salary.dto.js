"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalaryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_salary_dto_1 = require("./create-salary.dto");
class UpdateSalaryDto extends (0, mapped_types_1.PartialType)(create_salary_dto_1.CreateSalaryDto) {
}
exports.UpdateSalaryDto = UpdateSalaryDto;
//# sourceMappingURL=update-salary.dto.js.map