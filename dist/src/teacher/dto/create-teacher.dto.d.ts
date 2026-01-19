import { TeacherLevel, TeacherSpecialty } from '../../../generated/prisma/enums';
export declare class CreateTeacherDto {
    email: string;
    phoneNumber: string;
    fullName: string;
    password: string;
    confirm_password: string;
    cardNumber: string;
    isActive?: boolean;
    specification?: TeacherSpecialty;
    level?: TeacherLevel;
    description?: string;
    hourPrice?: number;
    portfolioLink?: string;
    imageUrl?: string;
    rating?: number;
    experience?: string;
    googleId: string;
}
