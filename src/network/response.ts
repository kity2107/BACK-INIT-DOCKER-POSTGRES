import { Request, Response } from 'express';

// const statusMessages = {
//     200: 'Done',
//     201: 'Created',
//     400: 'Invalid format',
//     500: 'Internal Server Error',
// };

export const success = (_req: Request, res: Response, message: any, status: number) => {
    // const statusCode = status;
    // const statusMessage = message;

    // if (!status) {
    //     status = 200;
    // }

    // if (!message) {
    //     statusMessage = statusMessages[status];
    // }

    res.status(status).send({ error: '', body: message });
    return true;
};

export const error = (_req: Request, res: Response, message: any, status: number, details: any) => {
    // const statusCode = status;
    // const statusMessage = message;

    // if (!status) {
    //     status = 500;
    // }

    // if (!message) {
    //     statusMessage = statusMessages[status];
    // }
    console.error(details);
    res.status(status).send({ error: message, body: '' });
    return false;
};
