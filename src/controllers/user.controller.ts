import { Request, Response } from 'express';

import { success, error } from '../network/response';

import AppDataSource from './../database/index';
import { io } from '../app';
import { Users } from '../interfaces/user';
import User from '../database/entities/User';

const getUser = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const allUser = await userRepository.find();
        io.emit('messages', 'GET: /user-list, se listo usurios');
        success(req, res, allUser, 200);
    } catch (err: any) {
        console.log(err);
        error(req, res, 'Unexpected error', 500, err);
    }
};

const addUser = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const user: Users = req.body.user;

        if (!user.firstname || !user.lastname || !user.email || !user.password) {
            throw new Error('Fail users');
        }
        const result = await userRepository.save(user);
        io.emit('messages', 'POST: /user-add, se inserto usurio');
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);
        io.emit('messages', `POST: /user-add, Error al querer insertar usurio ${err.detail}`);
        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};

export default { getUser, addUser };
