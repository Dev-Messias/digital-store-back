import { Request, Response } from 'express';

import { CreateUserServices } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { firstname, surname, email, password } = req.body;//pegando dados do corpo da requisição

        const createUserService = new CreateUserServices();

        //passando dados para o serviço
        const user = await createUserService.execute({
            firstname,
            surname,
            email,
            password
        });

        return res.json(user)


    }
}

export { CreateUserController }