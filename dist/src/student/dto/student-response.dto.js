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
exports.StudentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StudentResponseDto {
    id;
    lastName;
    firstName;
    phoneNumber;
    role;
    tgId;
    tgUsername;
    isActive;
    isBlocked;
    blockedAt;
    blockedReason;
    isDeleted;
    deletedAt;
    createdAt;
    updatedAt;
}
exports.StudentResponseDto = StudentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid', description: 'Student ID' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998901234567', description: 'Phone number' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'student', description: 'User role' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789', description: 'Telegram ID' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "tgId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'johndoe', description: 'Telegram username' }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "tgUsername", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Is active' }),
    __metadata("design:type", Boolean)
], StudentResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Is blocked' }),
    __metadata("design:type", Boolean)
], StudentResponseDto.prototype, "isBlocked", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Blocked date' }),
    __metadata("design:type", Date)
], StudentResponseDto.prototype, "blockedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Violated terms',
        description: 'Block reason',
    }),
    __metadata("design:type", String)
], StudentResponseDto.prototype, "blockedReason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Is deleted' }),
    __metadata("design:type", Boolean)
], StudentResponseDto.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deleted date' }),
    __metadata("design:type", Date)
], StudentResponseDto.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", Date)
], StudentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated date' }),
    __metadata("design:type", Date)
], StudentResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=student-response.dto.js.map