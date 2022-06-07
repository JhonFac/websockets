import express from 'express';
import socket, { Socket } from 'socket.io';
import http from 'http';


const app = express();
app.use(express.static(__dirname + '/../public'));

const PORT = process.env.PORT || 8000;

app.get('/msg', (req, res) => {
    const msg = req.query.msg?.toString() || '';
    console.log(msg);
    
    for(const client of clients) {
        client.emit('msg', msg);
    }

    res.json({
        ok: true,
        msg
    });
})

const httpServer = http.createServer(app);
const io = socket(httpServer, {
    path: '/socket.io'
})

const clients : Array<any> = [];

io.on('connection', (client: socket.Socket) => {
    client.on('join', (params: string) => {
        clients.push(client);
        const data = 
        console.log(`ID: ${client.id} ${params}`);
        console.log(`time: ${client.handshake.time}`);

        // console.log(`address: ${client.handshake.address}`);
        // console.log(`url: ${client.handshake.url}`);

        // let a = client.handshake
        // let claves = Object.keys(a)
        // for(let i=0; i< claves.length; i++){
        //   let clave = claves[i];
        //   console.log(clave);
        // //   console.log(a[clave]);
        // }

    });
    
    client.on("chat_message", () => {
        io.emit("chat_message", 'message');
        console.log(`Enviado`);
      })

    client.on('disconnect', () => {
        clients.splice(clients.indexOf(client), 1);
        console.log(`Disconnected: ${client.id}`);

    })
})



httpServer.listen(PORT, () => {
    console.log('Server http started at ' + PORT);
});