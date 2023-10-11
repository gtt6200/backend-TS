process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from 'dotenv';
import express from 'express';
import { container } from "./container";
import { TestService } from './services/test.service';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);


const app: express.Application = express();

app.get("/", (req, res, err) => {
    try {
        res.send("Hola corregido todo");
    } catch {
        console.log(err);
    }
});

const testService = container.resolve<TestService>('testService');
console.log(testService.get());


export {
    app
};