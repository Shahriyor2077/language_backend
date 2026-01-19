"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonConfig = void 0;
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
exports.winstonConfig = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike('HmeHyou')),
        }),
        new winston.transports.File({
            filename: 'logs/combine.log',
            level: 'info',
            format: winston.format.combine(winston.format.label({ label: 'HmeHyou' }), winston.format.timestamp(), winston.format.json()),
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: winston.format.combine(winston.format.label({ label: 'HmeHyou' }), winston.format.timestamp(), winston.format.json()),
        }),
    ],
};
//# sourceMappingURL=winstonLogging.js.map