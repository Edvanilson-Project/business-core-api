"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeLocationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_employee_location_dto_1 = require("./create-employee-location.dto");
class UpdateEmployeeLocationDto extends (0, mapped_types_1.PartialType)(create_employee_location_dto_1.CreateEmployeeLocationDto) {
}
exports.UpdateEmployeeLocationDto = UpdateEmployeeLocationDto;
//# sourceMappingURL=update-employee-location.dto.js.map