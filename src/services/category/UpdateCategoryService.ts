import prismaClient from "../../prisma";

interface CategoryRequest {
    category_id: string;
    name: string,
    slug: string,
    use_in_menu: boolean;
}

class UpdateCategoryService {
    async execute({category_id, name, slug, use_in_menu}:CategoryRequest) {
        try {

            const categoryAlreadyExists = await prismaClient.category.findFirst({
                where: {
                    id: category_id,
                }
            })

            //se não exitir a  categoria
            if (!categoryAlreadyExists) {
                throw new Error("category not exists!")
            }

            if(name === '' || slug === '' ){
                throw new Error("name/slug invalid")
            }


            //atualizando dados
            const categoryUpdate = await prismaClient.category.update({
                where: {
                    id: category_id
                },
                data: {
                    name, 
                    slug, 
                    use_in_menu
                },
                select: {
                    id: true,
                    name: true, 
                    slug: true, 
                    use_in_menu: true
                }
            })

            return categoryUpdate;
            
        } catch (err) {
            throw new Error("Error an update the category!")
        }
    }
}

export { UpdateCategoryService }