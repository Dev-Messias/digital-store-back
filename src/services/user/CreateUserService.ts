import prismaClient from '../../prisma/index';
import { hash } from 'bcryptjs'

interface UserRequest {
    firstname: string;
    surname: string;
    email: string;
    password: string;
}

class CreateUserServices {
    async execute({ firstname, surname, email, password }: UserRequest) {
        //verificar se ele enviou um email
        if (!email) {
            throw new Error("Email incorrect")
        }

        //verificar se o email já está cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        //criptografando senha
        const passwordHash = await hash(password, 8)

        //cadastrtando o usuario no banco
        const user = await prismaClient.user.create({
            data: {
                firstname: firstname,
                surname: surname,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                firstname: true,
                surname: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserServices }