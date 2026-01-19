export declare class AdminResponseDto {
    message: string;
    id: string;
    username: string;
    password: string;
    role: string;
    phoneNumber: string;
    isActive: boolean;
    isDeleted: boolean;
    deletedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<AdminResponseDto>);
}
