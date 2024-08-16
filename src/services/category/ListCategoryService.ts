import prismaClient from "../../prisma";

class ListCategorySerevice{
    async execute(){
        //buscando todas as categorias
        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export {ListCategorySerevice}