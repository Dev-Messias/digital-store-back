import prismaClient from "../../prisma";

interface ProductImgRequest{
    enabled?: boolean;
    path: string;
    product_id: string;
}

class CreateProductImgService{
    async execute({ enabled, path, product_id}: ProductImgRequest){
         //verificando se esta vazio
         if(path === '' ){
            throw new Error('input invalid')  
        }

        const productImg = await prismaClient.productImg.create({
            data:{
                enabled: enabled,
                path: path,
                product_id: product_id
            }
        })
        return productImg;
    }
}

export { CreateProductImgService }