import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
    slug: string;
}

class CreateCategoryService{
    async execute({name, slug}: CategoryRequest){
        //verificando se esta vazio
        if(name === '' && slug === ''){
            throw new Error('Name/Slug invalid')
        }

        //cadastrando
        const category = await prismaClient.category.create({
            data:{
                name: name,
                slug: slug,
            },
            select:{
                id: true,
                name: true,
                slug: true,
                use_in_menu: true
            }
        })

        return category;
    }
}

export {CreateCategoryService}