import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';

interface PayLoad{
    sub: string;
}

export function isAuthenticate(req: Request, res: Response, next: NextFunction){
    
    //receber o token
    const authToken = req.headers.authorization;

    // se não tiver o token mostrar o erro
    if(!authToken){
        return res.status(401).end();
    }

    //desconstruindo 
    const [, token] = authToken.split(" ");

    
    try {
        //validando token
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
        req.user_id = sub;

        return next();

        
    } catch (err) {
        //caso de erro
        return res.status(401).end();
    }
    
}