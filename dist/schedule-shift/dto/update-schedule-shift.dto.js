"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScheduleShiftDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_schedule_shift_dto_1 = require("./create-schedule-shift.dto");
class UpdateScheduleShiftDto extends (0, mapped_types_1.PartialType)(create_schedule_shift_dto_1.CreateScheduleShiftDto) {
}
exports.UpdateScheduleShiftDto = UpdateScheduleShiftDto;
//# sourceMappingURL=update-schedule-shift.dto.js.map