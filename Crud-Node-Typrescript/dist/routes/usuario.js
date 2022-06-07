"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const usuarios_1 = require("./../controllers/usuarios");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', usuarios_1.getUsuarios);
exports.router.get('/:id', usuarios_1.getUsuario);
exports.router.post('/', usuarios_1.postUsuario);
exports.router.put('/:id', usuarios_1.putUsuario);
exports.router.delete('/:id', usuarios_1.deletUsuario);
//# sourceMappingURL=usuario.js.map