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
exports.TransactionListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../generated/prisma/enums");
class TransactionListResponseDto {
    id;
    lessonId;
    studentId;
    price;
    status;
    canceledTime;
    performedTime;
    reason;
    createdAt;
    updatedAt;
}
exports.TransactionListResponseDto = TransactionListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], TransactionListResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], TransactionListResponseDto.prototype, "lessonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174001' }),
    __metadata("design:type", String)
], TransactionListResponseDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000 }),
    __metadata("design:type", Number)
], TransactionListResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.TransactionStatus }),
    __metadata("design:type", String)
], TransactionListResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time', nullable: true }),
    __metadata("design:type", Object)
], TransactionListResponseDto.prototype, "canceledTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time', nullable: true }),
    __metadata("design:type", Object)
], TransactionListResponseDto.prototype, "performedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], TransactionListResponseDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], TransactionListResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], TransactionListResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=transaction-list-response.dto.js.map