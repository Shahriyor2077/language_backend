"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.LessonHistoryScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.TransactionScalarFieldEnum = exports.TeacherPaymentScalarFieldEnum = exports.LessonScalarFieldEnum = exports.LessonTemplateScalarFieldEnum = exports.StudentScalarFieldEnum = exports.DeletedTeacherScalarFieldEnum = exports.TeacherScalarFieldEnum = exports.AdminScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/library");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.19.2",
    engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    Admin: 'Admin',
    Teacher: 'Teacher',
    DeletedTeacher: 'DeletedTeacher',
    Student: 'Student',
    LessonTemplate: 'LessonTemplate',
    Lesson: 'Lesson',
    TeacherPayment: 'TeacherPayment',
    Transaction: 'Transaction',
    Notification: 'Notification',
    LessonHistory: 'LessonHistory'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AdminScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TeacherScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phoneNumber: 'phoneNumber',
    fullName: 'fullName',
    password: 'password',
    cardNumber: 'cardNumber',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    role: 'role',
    specification: 'specification',
    level: 'level',
    description: 'description',
    hourPrice: 'hourPrice',
    portfolioLink: 'portfolioLink',
    imageUrl: 'imageUrl',
    googleId: 'googleId',
    googleRefreshToken: 'googleRefreshToken',
    googleAccessToken: 'googleAccessToken',
    rating: 'rating',
    experience: 'experience',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DeletedTeacherScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    deletedBy: 'deletedBy',
    reason: 'reason',
    deletedAt: 'deletedAt',
    restoreAt: 'restoreAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentScalarFieldEnum = {
    id: 'id',
    lastName: 'lastName',
    firstName: 'firstName',
    phoneNumber: 'phoneNumber',
    role: 'role',
    tgId: 'tgId',
    tgUsername: 'tgUsername',
    isActive: 'isActive',
    isBlocked: 'isBlocked',
    blockedAt: 'blockedAt',
    blockedReason: 'blockedReason',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LessonTemplateScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    name: 'name',
    timeSlot: 'timeSlot',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LessonScalarFieldEnum = {
    id: 'id',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    teacherId: 'teacherId',
    studentId: 'studentId',
    googleMeetsUrl: 'googleMeetsUrl',
    status: 'status',
    googleEventId: 'googleEventId',
    price: 'price',
    isPaid: 'isPaid',
    bookedAt: 'bookedAt',
    remainedLessonId: 'remainedLessonId',
    completedAt: 'completedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TeacherPaymentScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    lessonId: 'lessonId',
    totalLessonAmount: 'totalLessonAmount',
    platformComission: 'platformComission',
    platformAmount: 'platformAmount',
    teacherAmount: 'teacherAmount',
    paidBy: 'paidBy',
    paidAt: 'paidAt',
    isCanceled: 'isCanceled',
    canceledAt: 'canceledAt',
    canceledBy: 'canceledBy',
    canceledReason: 'canceledReason',
    notes: 'notes',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TransactionScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    studentId: 'studentId',
    price: 'price',
    status: 'status',
    canceledTime: 'canceledTime',
    performedTime: 'performedTime',
    reason: 'reason',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    lessonId: 'lessonId',
    message: 'message',
    sendAt: 'sendAt',
    isSend: 'isSend',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LessonHistoryScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    star: 'star',
    feedback: 'feedback',
    teacherId: 'teacherId',
    studentId: 'studentId',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map