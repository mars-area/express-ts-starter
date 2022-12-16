import { NextFunction, Request, Response } from 'express';
import { response } from '../utils/response';

export const home = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(response({
        message: 'Welcome to the API',
        error: null,
        data: undefined
    }))
}