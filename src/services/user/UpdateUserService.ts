import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string;
    firstname: string;
    surname: string;
}

class UpdateUserService {
    async execute({ user_id, firstname, surname}: UserRequest) {
        try {

            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                }
            })

            //se não exitir o usuario
            if (!userAlreadyExists) {
                throw new Error("User not exists!")
            }

            

            if(firstname === '' || surname === ''){
                throw new Error("firstname/surname invalid")
            }

            //atualizando dados
            const userUpdate = await prismaClient.user.update({
                where: {
                    id: user_id
                },
                data: {
                    firstname,
                    surname,
                },
                select: {
                    id: true,
                    firstname: true,
                    surname: true,
                    email: true
                }
            })

            return userUpdate;

        } catch (err) {
            throw new Error("Error an update the user!")
        }
    }
}

export { UpdateUserService }