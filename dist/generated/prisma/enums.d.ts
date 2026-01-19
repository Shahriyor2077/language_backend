export declare const AdminRole: {
    readonly admin: "admin";
    readonly superAdmin: "superAdmin";
};
export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole];
export declare const TeacherSpecialty: {
    readonly english: "english";
    readonly french: "french";
    readonly spanish: "spanish";
    readonly italian: "italian";
    readonly german: "german";
};
export type TeacherSpecialty = (typeof TeacherSpecialty)[keyof typeof TeacherSpecialty];
export declare const LessonStatus: {
    readonly available: "available";
    readonly booked: "booked";
    readonly completed: "completed";
    readonly cancelled: "cancelled";
};
export type LessonStatus = (typeof LessonStatus)[keyof typeof LessonStatus];
export declare const TransactionStatus: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly cancelled: "cancelled";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const TeacherLevel: {
    readonly b2: "b2";
    readonly c1: "c1";
    readonly c2: "c2";
};
export type TeacherLevel = (typeof TeacherLevel)[keyof typeof TeacherLevel];
