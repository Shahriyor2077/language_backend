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
exports.CreateTeacherPaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTeacherPaymentDto {
    teacherId;
    lessonId;
    totalLessonAmount;
    platformComission;
    platformAmount;
    teacherAmount;
    paidBy;
    isCanceled;
    canceledAt;
    canceledBy;
    canceledReason;
    notes;
}
exports.CreateTeacherPaymentDto = CreateTeacherPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teacher ID',
        example: '4e1cb22f-aa5c-4568-a346-685565ba78ec',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "teacherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lesson ID',
        example: 'clx2lesson123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "lessonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total lesson price',
        example: 5000,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTeacherPaymentDto.prototype, "totalLessonAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Platform commission percentage',
        example: 10,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTeacherPaymentDto.prototype, "platformComission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Platform commission amount',
        example: 500,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTeacherPaymentDto.prototype, "platformAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teacher payout amount',
        example: 4500,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTeacherPaymentDto.prototype, "teacherAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Who made the payment',
        example: 'Student',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "paidBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether the payment is canceled',
        example: false,
        default: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTeacherPaymentDto.prototype, "isCanceled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cancellation date (ISO)',
        example: '2024-01-16T14:20:00.000Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.ValidateIf)((o) => o.isCanceled === true),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "canceledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the user who canceled the payment',
        example: 'admin-uuid-123',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.isCanceled === true),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "canceledBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Reason for cancellation',
        example: 'Lesson was rescheduled',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.isCanceled === true),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "canceledReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Additional notes',
        example: 'Paid via cash',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeacherPaymentDto.prototype, "notes", void 0);
//# sourceMappingURL=create-teacher-payment.dto.js.map