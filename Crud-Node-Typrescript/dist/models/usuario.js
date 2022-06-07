"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conect_1 = require("../db/conect");
const sequelize_1 = require("sequelize");
const Usuario = conect_1.db.define('Usuario', {
    nombre: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    cel: { type: sequelize_1.DataTypes.TINYINT },
    estado: { type: sequelize_1.DataTypes.BOOLEAN }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map