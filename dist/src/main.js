"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const winstonLogging_1 = require("./common/logging/winstonLogging");
const errorHandling_1 = require("./common/errors/errorHandling");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
const express = require("express");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger(winstonLogging_1.winstonConfig),
    });
    const config = app.get(config_1.ConfigService);
    const PORT = config.get('PORT') ?? 3030;
    const expressApp = app.getHttpAdapter().getInstance();
    app.enableCors({
        origin: '*',
        credentials: false,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.use(cookieParser());
    const uploadsPath = (0, path_1.join)(process.cwd(), 'uploads');
    console.log('📁 Uploads directory:', uploadsPath);
    console.log('📁 Directory exists:', fs.existsSync(uploadsPath));
    if (fs.existsSync(uploadsPath)) {
        const files = fs.readdirSync((0, path_1.join)(uploadsPath, 'teachers'));
    }
    expressApp.use('/uploads', express.static(uploadsPath));
    app.useGlobalFilters(new errorHandling_1.AllExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            console.error('Validation errors:', errors);
            return new common_1.BadRequestException(errors);
        },
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.setGlobalPrefix('api');
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Language CRM API')
        .setDescription('API documentation for Language CRM')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const sessionFile = './session_db.json';
    if (fs.existsSync(sessionFile)) {
        const stats = fs.statSync(sessionFile);
        const fileAge = Date.now() - stats.mtimeMs;
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        if (fileAge > oneWeek) {
            fs.unlinkSync(sessionFile);
            console.log('🗑️ Old session file cleaned (older than 1 week)');
        }
        else {
            console.log('🗃️ Session file is recent, no cleanup needed');
        }
    }
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map