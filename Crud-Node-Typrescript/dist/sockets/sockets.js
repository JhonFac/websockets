"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuarios = exports.configurarUsuario = exports.mensaje = exports.desconectar = exports.conectarCliente = exports.usuariosConectados = void 0;
const usuarios_lista_1 = require("../models/usuarios-lista");
const usuario_connect_1 = require("../models/usuario_connect");
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
// Agregar cliente a lista de usuarios
const conectarCliente = (cliente, io) => {
    console.log("Creando usuario");
    const usuario = new usuario_connect_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
    cliente.emit('id-usuario', cliente.id);
    // console.log(cliente.id);
};
exports.conectarCliente = conectarCliente;
// Escuchar si cliente se desconecta
const desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        console.log('Borrar Marcador');
        cliente.broadcast.emit('marcador-borrar', cliente.id);
        console.log('Ciente desconectado');
        exports.usuariosConectados.borrarUsuario(cliente.id);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};
exports.desconectar = desconectar;
// Escuchar mensajes
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
// Configurar Usuario
const configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });
};
exports.configurarUsuario = configurarUsuario;
// Obtener usuarios
const obtenerUsuarios = (cliente, io) => {
    cliente.on('obtener-usuarios', () => {
        io.to(cliente.id).emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
//# sourceMappingURL=sockets.js.map