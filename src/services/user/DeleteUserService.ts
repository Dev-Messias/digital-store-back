import prismaClient from "../../prisma";

interface DeleteRequest{
    user_id: string;
}

class DeleteUserService{
    async execute({user_id}:DeleteRequest){
        if(user_id === ''){
            throw new Error('Error.')
        }

        try {

            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                }
            })

            //se não exitir o usuario
            if(!userAlreadyExists){
                throw new Error("User not exists!");   
            }

            await prismaClient.user.delete({
                where:{
                    id: user_id
                }
            })

            return {message: "Usuário deletado com sucesso!"}
            
        } catch (err) {
            throw new Error(err)
        }
    }
}

export {DeleteUserService}