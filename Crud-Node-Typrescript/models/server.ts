import { db } from '../db/conect';
import { router } from '../routes/usuario';
import express,{Application} from 'express';
import cors from 'cors';
import SERVER_PORT from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as sockets from '../sockets/sockets';


export default class Server{

    private Paths= {
        usuarios: '/api'
    };

    public app: express.Application;
    public port: string;

    private constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.conecto_to_DB();
        this.middleware();
        // definir mis rutas 
        this.routes();
    }

    listen(){
        this.app?.listen( this.port, () =>{
            console.log('servidor corriendo en el puerto si ' + this.port);
        })
    }


    middleware(){

        // CORS
        this.app?.use(cors());

        //LECTURA DEL BODY 
        this.app?.use(express.json());

        // CARPETA PUBLICA 
        this.app?.use(express.static('public'));

    }
    
    async conecto_to_DB(){

        try{
            await db.authenticate();
            console.log('succes connection');
        } catch (error) {
            console.log('connection failed');
            throw new Error();
        }
    }

    routes(){
        this.app?.use(this.Paths.usuarios, router)
    }

}

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
