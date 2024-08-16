import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        //verificar se o email existe.
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("User/password incorrect")
        }

        //verificar se a senha esta correta
        const passwordMach = await compare(password, user.password)

        //se a senha não é igual a do banco
        if (!passwordMach) {
            throw new Error("User/password incorrect")
        }

        //gerar token JWT do usuario 
        const token = sign(
            {
                name: user.firstname,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return { 
            id: user.id,
            firstname: user.firstname,
            surname: user.surname,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };