"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConfig = void 0;
const path_1 = require("path");
const getDatabaseConfig = (configService) => ({
    type: 'postgres',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    username: configService.get('database.username'),
    password: configService.get('database.password'),
    database: configService.get('database.database'),
    entities: [(0, path_1.join)(__dirname, '..', '..', '**', '*.entity.{ts,js}')],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false,
    },
});
exports.getDatabaseConfig = getDatabaseConfig;
//# sourceMappingURL=database.config.js.map