/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/index';
// import multer from 'multer';

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
// app.use(upload.array(''));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/', router);
app.use('/app', express.static('public'));

io.on('connection', (socket: any) => {
    console.log('Nuevo cliente conectado');
    socket.emit('messages', 'Bienvenido');
});

export default app;
export { server, io };
