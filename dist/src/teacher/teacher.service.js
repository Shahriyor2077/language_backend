"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const sharp = require('sharp');
let TeacherService = class TeacherService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    UPLOAD_DIR = './uploads/teachers';
    MAX_WIDTH = 800;
    MAX_HEIGHT = 800;
    QUALITY = 80;
    async create(createTeacherDto) {
        const { fullName, email, phoneNumber, password, confirm_password, cardNumber, specification, googleId, level, description, hourPrice, portfolioLink, experience, isActive, } = createTeacherDto;
        if (password !== confirm_password) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const isExists = await this.prismaService.teacher.findFirst({
            where: {
                OR: [{ email }, { cardNumber }, { phoneNumber }],
            },
        });
        if (isExists) {
            if (isExists.email === email) {
                throw new common_1.BadRequestException('Email already in use');
            }
            if (isExists.cardNumber === cardNumber) {
                throw new common_1.BadRequestException('Card number already in use');
            }
            if (isExists.phoneNumber === phoneNumber) {
                throw new common_1.BadRequestException('Phone number already in use');
            }
        }
        const hashPassword = await bcrypt.hash(password, 7);
        const teacher = await this.prismaService.teacher.create({
            data: {
                googleId,
                specification,
                fullName,
                email,
                phoneNumber,
                cardNumber,
                password: hashPassword,
                level,
                description,
                hourPrice,
                portfolioLink,
                experience,
                isActive: isActive ?? true,
            },
        });
        return {
            message: 'Teacher created successfully',
            teacher,
        };
    }
    async findAll() {
        const teachers = await this.prismaService.teacher.findMany();
        return {
            message: 'Teachers retrieved successfully',
            teachers: teachers || [],
        };
    }
    async findOne(id) {
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        return {
            message: 'Teacher retrieved successfully',
            teacher,
        };
    }
    async update(id, updateTeacherDto) {
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        const updatedTeacher = await this.prismaService.teacher.update({
            where: { id },
            data: updateTeacherDto,
        });
        return {
            message: 'Teacher updated successfully',
            teacher: updatedTeacher,
        };
    }
    async remove(id) {
        const user = await this.prismaService.teacher.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`Teacher with this ${id} not found`);
        }
        const deletedTeacher = await this.prismaService.teacher.delete({
            where: { id },
        });
        return {
            message: 'Teacher deleted successfully',
            deletedTeacher,
        };
    }
    async updatePassword(id, dto) {
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        const isMatch = await bcrypt.compare(dto.oldPassword, teacher.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Old password is incorrect');
        }
        if (dto.newPassword !== dto.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const hashedPassword = await bcrypt.hash(dto.newPassword, 7);
        await this.prismaService.teacher.update({
            where: { id },
            data: { password: hashedPassword },
        });
        return { message: 'Password updated successfully' };
    }
    async uploadImage(id, filename) {
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id },
        });
        if (!teacher) {
            await this.deleteFile((0, path_1.join)(this.UPLOAD_DIR, filename));
            throw new common_1.NotFoundException('Teacher not found');
        }
        try {
            const inputPath = (0, path_1.join)(this.UPLOAD_DIR, filename);
            const compressedFilename = `compressed-${Date.now()}-${filename.replace(/\.[^/.]+$/, '')}.jpg`;
            const outputPath = (0, path_1.join)(this.UPLOAD_DIR, compressedFilename);
            await sharp(inputPath)
                .resize(this.MAX_WIDTH, this.MAX_HEIGHT, {
                fit: 'inside',
                withoutEnlargement: true,
            })
                .jpeg({ quality: this.QUALITY, progressive: true })
                .toFile(outputPath);
            await this.deleteFile(inputPath);
            if (teacher.imageUrl) {
                await this.deleteFile((0, path_1.join)('./', teacher.imageUrl));
            }
            const imageUrl = `uploads/teachers/${compressedFilename}`;
            const updatedTeacher = await this.prismaService.teacher.update({
                where: { id },
                data: { imageUrl },
            });
            return {
                message: 'Image uploaded and compressed successfully',
                teacher: updatedTeacher,
            };
        }
        catch (error) {
            await this.deleteFile((0, path_1.join)(this.UPLOAD_DIR, filename));
            throw error;
        }
    }
    async deleteFile(path) {
        await (0, promises_1.unlink)(path).catch(() => { });
    }
    async deleteImage(id) {
        const teacher = await this.prismaService.teacher.findUnique({
            where: { id },
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        if (!teacher.imageUrl) {
            throw new common_1.BadRequestException('Teacher has no image to delete');
        }
        const imagePath = (0, path_1.join)('./', teacher.imageUrl);
        await (0, promises_1.unlink)(imagePath).catch(() => { });
        const updatedTeacher = await this.prismaService.teacher.update({
            where: { id },
            data: { imageUrl: null },
        });
        return {
            message: 'Image deleted successfully',
            teacher: updatedTeacher,
        };
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map