process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from 'dotenv';
import express from 'express';
import loadContainer from "./container";
import { loadControllers } from 'awilix-express';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);


const app: express.Application = express();


//container

loadContainer(app);

//controladores
app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
))

export {
    app
};