import dotenv from 'dotenv'
import ServerDB from './models/server';

// configurar dotenv
dotenv.config();

const server = new ServerDB();

server.listen();