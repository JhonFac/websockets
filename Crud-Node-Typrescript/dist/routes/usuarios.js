"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const usuarios_1 = require("./../controllers/usuarios");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', usuarios_1.getUsuarios);
exports.router.get('/:id', usuarios_1.getUsuario);
exports.router.get('/', usuarios_1.postUsuario);
exports.router.get('/:id', usuarios_1.putUsuario);
exports.router.get('/:id', usuarios_1.deletUsuario);
//# sourceMappingURL=usuarios.js.map