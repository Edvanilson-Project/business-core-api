"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeScheduleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_employee_schedule_dto_1 = require("./create-employee-schedule.dto");
class UpdateEmployeeScheduleDto extends (0, mapped_types_1.PartialType)(create_employee_schedule_dto_1.CreateEmployeeScheduleDto) {
}
exports.UpdateEmployeeScheduleDto = UpdateEmployeeScheduleDto;
//# sourceMappingURL=update-employee-schedule.dto.js.map