export declare class CreateLessonDto {
    name: string;
    startTime: string;
    endTime: string;
    teacherId: string;
    studentId?: string;
    googleMeetsUrl?: string;
    price: number;
    isPaid?: boolean;
}
