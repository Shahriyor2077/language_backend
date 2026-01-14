import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateLessonDto } from './create-lesson.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @ApiPropertyOptional({
    description: 'Student ID (only for update)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsOptional()
  @IsUUID()
  studentId?: string;
}
