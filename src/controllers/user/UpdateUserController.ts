import {Request, Response} from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController{
    async handle(req: Request, res:Response){
        const {firstname, surname} = req.body;

        //buscando id do usuario logado
        const user_id = req.user_id;

        const updateUser = new UpdateUserService();

        const user = await updateUser.execute({
            user_id,
            firstname,
            surname
        })

        return res.json(user);
    }
}

export {UpdateUserController}