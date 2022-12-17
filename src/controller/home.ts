import { NextFunction, Request, Response } from 'express';
import { response } from '../utils/response';
import { prisma } from '../connect/prisma';

export const home = async (req: Request, res: Response, next: NextFunction) => {
    const ziggot = await prisma.ziggot.findMany();
    res.status(200).json(response({
        message: 'Welcome to the API',
        error: null,
        data: ziggot
    }))
}