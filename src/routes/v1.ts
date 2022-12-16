import express, { Application } from "express";
import { response } from "../utils/response";

// Controllers
import { home } from '../controller/home';

export const Routes = (app: Application) => {
    // Home
    const homeRouter = express.Router();
    app.use('/test', homeRouter);
    homeRouter.get('/', home);

    app.use((req, res) => {
        res.status(404).json(response({
            message: null,
            error: 'Not Found',
            data: undefined
        }))
    })
}