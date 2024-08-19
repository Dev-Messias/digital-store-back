import prismaClient from "../../prisma";

interface ProductRequest{
    product_id: string;
}

class DetailProductService{
    async execute({product_id}:ProductRequest){

        if(product_id === ''){
            throw new Error("Product not exists!")
        }

        const product = await  prismaClient.product.findFirst({
            where:{
                id: product_id
            },
            include:{
                productImages: true
            },
        })

        return product;
    }
}

export {DetailProductService}