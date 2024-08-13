import express, {Request, Response, NextFunction } from 'express';

//importando as rotas
import { router } from './routes';

const app = express();

//vamos o utilizar o tipo de dado como json
app.use(express.json());

//utilizar todas as rotas do arquivo rotas
app.use(router);

app.listen(3333, () => console.log('Servidor online!'))