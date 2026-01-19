export declare class NotificationResponseDto {
    id: string;
    studentId: string;
    lessonId: string;
    message: string;
    sendAt: Date;
    isSend: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
