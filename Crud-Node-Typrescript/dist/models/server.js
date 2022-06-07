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
const conect_1 = require("../db/conect");
const usuario_1 = require("../routes/usuario");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.Paths = {
            usuarios: '/api'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.conecto_to_DB();
        this.middleware();
        // definir mis rutas 
        this.routes();
    }
    listen() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.listen(this.port, () => {
            console.log('servidor corriendo en el puerto si ' + this.port);
        });
    }
    middleware() {
        var _a, _b, _c;
        // CORS
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use((0, cors_1.default)());
        //LECTURA DEL BODY 
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.use(express_1.default.json());
        // CARPETA PUBLICA 
        (_c = this.app) === null || _c === void 0 ? void 0 : _c.use(express_1.default.static('public'));
    }
    conecto_to_DB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conect_1.db.authenticate();
                console.log('succes connection');
            }
            catch (error) {
                console.log('connection failed');
                throw new Error();
            }
        });
    }
    routes() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use(this.Paths.usuarios, usuario_1.router);
    }
}
exports.default = Server;
// export default class Server{
//     private static _instance: Server;
//     public app: express.Application;
//     public port: number;
//     public io:socketIO.Server;
//     private httpServer: http.Server;
//     private constructor(){
//         this.app = express();
//         this.port = SERVER_PORT;
//         this.httpServer = new http.Server(this.app);
//         // Se configura el CORS
//         this.io = require ('socket.io') (this.httpServer, {
//             cors:{
//                 origin: true,
//                 credentials: true
//             }
//         });
//         this.escucharSockets();
//     }
//     listen(){
//         this.app?.listen( this.port, () =>{
//             console.log('servidor corriendo en el puerto si ' + this.port);
//         })
//     }
//     public static get instance(){
//         return this._instance || (this._instance = new this());
//     }
//     private escucharSockets() {
//         console.log('Escuchando conexiones - sockets');
//         this.io.on('connection', cliente => {
//             console.log("Holaa");
//             // Conectar cliente
//             sockets.conectarCliente(cliente, this.io);
//             // Configurar Usuario
//             sockets.configurarUsuario(cliente, this.io);
//             // Obtener usuarios activos
//             sockets.obtenerUsuarios(cliente, this.io);
//             // Mensaje
//             sockets.mensaje(cliente, this.io);
//             // Desconectar
//             sockets.desconectar(cliente, this.io);
//         })
//     }
//     start(callback: VoidFunction){
//         this.httpServer.listen(this.port, callback);
//     }
// }
//# sourceMappingURL=server.js.map