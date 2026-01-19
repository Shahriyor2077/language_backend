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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transaction_service_1 = require("./transaction.service");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const update_transaction_dto_1 = require("./dto/update-transaction.dto");
const transaction_response_dto_1 = require("./dto/transaction-response.dto");
const transaction_list_response_dto_1 = require("./dto/transaction-list-response.dto");
const find_transaction_dto_1 = require("./dto/find-transaction.dto");
const jwtAdmin_auth_guard_1 = require("../common/guards/jwtAdmin-auth.guard");
const jwtRoles_guard_1 = require("../common/guards/jwtRoles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let TransactionController = class TransactionController {
    transactionService;
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    create(createTransactionDto) {
        return this.transactionService.create(createTransactionDto);
    }
    findAll(query) {
        return this.transactionService.findAll(query);
    }
    getStudentTransactions(studentId) {
        return this.transactionService.getStudentTransactions(studentId);
    }
    getLessonTransactions(lessonId) {
        return this.transactionService.getLessonTransactions(lessonId);
    }
    findOne(id) {
        return this.transactionService.findOne(id);
    }
    update(id, updateTransactionDto) {
        return this.transactionService.update(id, updateTransactionDto);
    }
    cancelTransaction(id, reason) {
        return this.transactionService.cancelTransaction(id, reason);
    }
    completeTransaction(id) {
        return this.transactionService.completeTransaction(id);
    }
    remove(id) {
        return this.transactionService.remove(id);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Transaction successfully created',
        type: transaction_response_dto_1.TransactionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - validation failed' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lesson or student not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all transactions with filtering and pagination',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of transactions',
        type: transaction_list_response_dto_1.TransactionListResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_transaction_dto_1.FindTransactionsDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('student/:studentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions for a specific student' }),
    (0, swagger_1.ApiParam)({ name: 'studentId', type: String, description: 'Student ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of student transactions',
        type: [transaction_response_dto_1.TransactionResponseDto],
    }),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getStudentTransactions", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('lesson/:lessonId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions for a specific lesson' }),
    (0, swagger_1.ApiParam)({ name: 'lessonId', type: String, description: 'Lesson ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of lesson transactions',
        type: [transaction_response_dto_1.TransactionResponseDto],
    }),
    __param(0, (0, common_1.Param)('lessonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getLessonTransactions", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get transaction by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Transaction ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction details',
        type: transaction_response_dto_1.TransactionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Transaction not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Transaction ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction successfully updated',
        type: transaction_response_dto_1.TransactionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Transaction not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transaction_dto_1.UpdateTransactionDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel a transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Transaction ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction cancelled',
        type: transaction_response_dto_1.TransactionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Transaction already cancelled' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Transaction not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "cancelTransaction", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete a transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Transaction ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction completed',
        type: transaction_response_dto_1.TransactionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Transaction already completed' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Transaction not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "completeTransaction", null);
__decorate([
    (0, common_1.UseGuards)(jwtAdmin_auth_guard_1.AdminAuthGuard, jwtRoles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Transaction ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Transaction deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Transaction not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "remove", null);
exports.TransactionController = TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, common_1.Controller)('transactions'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map