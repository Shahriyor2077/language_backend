import { PartialType } from '@nestjs/swagger';
import { CreateDeletedTeacherDto } from './create-deleted-teacher.dto';

export class UpdateDeletedTeacherDto extends PartialType(CreateDeletedTeacherDto) {}
