export declare class StudentResponseDto {
    id: string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
    role: string;
    tgId: string;
    tgUsername?: string;
    isActive: boolean;
    isBlocked: boolean;
    blockedAt?: Date;
    blockedReason?: string;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
