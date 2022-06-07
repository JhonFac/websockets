"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
    // res.json({
    //     msg: 'getUsuarios'
    // })
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuarios = yield usuario_1.default.findByPk(id);
    if (usuarios) {
        res.json({ usuarios });
    }
    else {
        res.status(404).json({
            msg: 'el usuario no existe'
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const exiEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (exiEmail) {
            return res.status(400).json({
                msg: 'Ya exite el usuario con el correo' + body.email,
            });
        }
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const updateusuario = yield usuario_1.default.findByPk(id);
        if (!updateusuario) {
            return res.status(404).json({
                msg: 'No exite el usuario con el ID: ' + id,
            });
        }
        // opcional para poder validar datos 
        const exiEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (exiEmail) {
            return res.status(400).json({
                msg: 'Ya exite el usuario con el correo: ' + body.email,
            });
        }
        yield updateusuario.update(body);
        res.json(updateusuario);
    }
    catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        });
    }
});
exports.putUsuario = putUsuario;
const deletUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const Del_usuario = yield usuario_1.default.findByPk(id);
        if (!Del_usuario) {
            return res.status(404).json({
                msg: 'No exite el usuario con el ID: ' + id,
            });
        }
        yield Del_usuario.update({ estado: false });
        res.json(Del_usuario);
    }
    catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        });
    }
    res.json({
        msg: 'deletUsuario',
        id
    });
});
exports.deletUsuario = deletUsuario;
function estado(estado, arg1) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=usuarios.js.map