import { NextFunction, Request, Response } from "express";
import { response } from "../utils/response";

export const errorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(new Date().toISOString(), `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - ${req.headers['user-agent']} - Stack: ${err.stack}`);
    res.status(err.statusCode || 500).json(response({
        error: 'Service unavailable',
        message: null,
        data: undefined
    }));
}