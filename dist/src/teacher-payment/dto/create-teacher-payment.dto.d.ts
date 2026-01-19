export declare class CreateTeacherPaymentDto {
    teacherId: string;
    lessonId: string;
    totalLessonAmount: number;
    platformComission: number;
    platformAmount: number;
    teacherAmount: number;
    paidBy: string;
    isCanceled?: boolean;
    canceledAt?: string;
    canceledBy?: string;
    canceledReason?: string;
    notes?: string;
}
