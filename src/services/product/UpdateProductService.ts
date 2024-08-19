import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    enabled?: boolean;
    name: string;
    slug: string;
    use_in_menu?: boolean;
    stock?: number;
    description: string;
    price: number;
    price_with_discount: number;
    category_id: string;

}

class UpdateProductService {
    async execute({ product_id, enabled, name, slug, use_in_menu, stock, description, price, price_with_discount, category_id }: ProductRequest) {
        try {

            const productAlreadyExists = await prismaClient.product.findFirst({
                where: {
                    id: product_id,
                }
            })

            //se não exitir o usuario
            if (!productAlreadyExists) {
                throw new Error("Product not exists!")
            }

            
            //verificando se esta vazio
            if (name === '' || slug === '' || price === null || price_with_discount === null) {
                throw new Error('input invalid')


            }

            //atualizando dados
            const productUpdate = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    enabled,
                    name, slug,
                    use_in_menu,
                    stock,
                    description,
                    price,
                    price_with_discount,
                    category_id
                }
            })

            return productUpdate;




        } catch (err) {
            throw new Error("Error an update the product!")
        }

    }
}

export { UpdateProductService }