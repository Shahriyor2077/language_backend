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
exports.LessonHistoryController = void 0;
const common_1 = require("@nestjs/common");
const lesson_history_service_1 = require("./lesson-history.service");
const create_lesson_history_dto_1 = require("./dto/create-lesson-history.dto");
const update_lesson_history_dto_1 = require("./dto/update-lesson-history.dto");
const swagger_1 = require("@nestjs/swagger");
const jwtCombinedAuth_guard_1 = require("../common/guards/both/jwtCombinedAuth.guard");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
let LessonHistoryController = class LessonHistoryController {
    lessonHistoryService;
    constructor(lessonHistoryService) {
        this.lessonHistoryService = lessonHistoryService;
    }
    create(dto) {
        return this.lessonHistoryService.create(dto);
    }
    findAll(page = 1, limit = 10) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        return this.lessonHistoryService.findAll().then((res) => {
            const paginatedHistories = res.histories.slice(skip, skip + limitNum);
            return {
                statusCode: 200,
                message: 'Lesson histories retrieved successfully',
                count: res.count,
                page: pageNum,
                limit: limitNum,
                histories: paginatedHistories,
            };
        });
    }
    findOne(id) {
        return this.lessonHistoryService.findOne(id);
    }
    update(id, dto) {
        return this.lessonHistoryService.update(id, dto);
    }
    remove(id) {
        return this.lessonHistoryService.remove(id);
    }
};
exports.LessonHistoryController = LessonHistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create lesson history (rating & feedback)' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Lesson history created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lesson_history_dto_1.CreateLessonHistoryDto]),
    __metadata("design:returntype", void 0)
], LessonHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get all lesson histories with pagination' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lesson histories retrieved successfully' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LessonHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get lesson history by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson history not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtCombinedAuth_guard_1.CombinedAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update lesson history' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation error' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lesson_history_dto_1.UpdateLessonHistoryDto]),
    __metadata("design:returntype", void 0)
], LessonHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete lesson history' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Lesson history not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonHistoryController.prototype, "remove", null);
exports.LessonHistoryController = LessonHistoryController = __decorate([
    (0, swagger_1.ApiTags)('Lesson History'),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.Controller)('lesson-history'),
    __metadata("design:paramtypes", [lesson_history_service_1.LessonHistoryService])
], LessonHistoryController);
//# sourceMappingURL=lesson-history.controller.js.map