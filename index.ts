import express, { Express, Request, Response } from 'express';
import { PORT } from './src/config';
import { errorHandling } from './src/middlewares/error';

const app: Express = express();
const port = PORT;

// Logger
import morgan from 'morgan';
app.use(morgan('dev'));

// I/O
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Helmet
import helmet from 'helmet';
app.use(helmet());

// CORS
import cors from 'cors';
app.options('*', cors());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

// Routes
import { Routes } from './src/routes/v1';
app.routes = Routes(app);

// Bootstrap the app
function main() {
    try {
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at port:${port}`);
        });
        // Error handling
        app.use(errorHandling);
    } catch (err) {
        console.error('⚡️[server]: Server error: ', err);
    }
}

main();