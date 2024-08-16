import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){
        //buscando dados do user
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                firstname: true,
                surname: true,
                email: true
            }
        })
        return user;
    }
}

export {DetailUserService}