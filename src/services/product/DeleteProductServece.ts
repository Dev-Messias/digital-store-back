import prismaClient from "../../prisma";

interface ProductRequest{
    product_id: string
}

class DeleteProductService{
    async execute({product_id}:ProductRequest){
        try {
            if(product_id === ''){
                throw new Error('Error.')
            }

            const productAlreadyExists = await prismaClient.product.findFirst({
                where: {
                    id: product_id,
                }
            })

            //se não exitir o produto
            if(!productAlreadyExists){
                throw new Error("product not exists!");   
            }

            await prismaClient.product.delete({
                where:{
                    id: product_id
                }
            })

            return {message: "Produto deletado com sucesso!"}

        } catch (err) {
            throw new Error(err)
        }
    }
}

export {DeleteProductService}