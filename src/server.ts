import express, {Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

//importando as rotas
import { router } from './routes';

const app = express();

//vamos o utilizar o tipo de dado como json
app.use(express.json());

//permitindo acessar de qualquer ip/url
app.use(cors())

//utilizar todas as rotas do arquivo rotas
app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)
//tratando error
app.use((err: Error, req: Request, res:Response, next: NextFunction)=>{
    //verificando se o que esta passando na rota é do tipo erro
    if(err instanceof Error){
        //se for uma instacia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(3333, () => console.log('Servidor online!'))