import { Request, Response } from 'express';
import { success } from '../network/response';
import LIB_VERSION from '../version';
import { io } from '../app';

export const getStatus = async (req: Request, res: Response) => {
    const data = {
        uptime: process.uptime(),
        status: 'Ok',
        message: 'The service is running',
        date: new Date(),
        version: LIB_VERSION,
    };
    io.emit('messages', 'se consulto status');
    success(req, res, data, 200);
};

export default getStatus;
