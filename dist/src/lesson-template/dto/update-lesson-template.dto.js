"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLessonTemplateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_lesson_template_dto_1 = require("./create-lesson-template.dto");
class UpdateLessonTemplateDto extends (0, swagger_1.PartialType)(create_lesson_template_dto_1.CreateLessonTemplateDto) {
}
exports.UpdateLessonTemplateDto = UpdateLessonTemplateDto;
//# sourceMappingURL=update-lesson-template.dto.js.map