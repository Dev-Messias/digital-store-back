import prismaClient from "../../prisma";

interface ProductRequest{
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

class CreateProductService{
    async execute({enabled, name, slug, use_in_menu, stock, description, price, price_with_discount, category_id}: ProductRequest){
         //verificando se esta vazio
        if(name === '' && slug === '' && price === null && price_with_discount === null ){
            throw new Error('input invalid')
            
            
        }

        const product = await prismaClient.product.create({
            data:{
                enabled: enabled, 
                name: name, 
                slug: slug, 
                use_in_menu: use_in_menu, 
                stock: stock, 
                description: description, 
                price: price, 
                price_with_discount: price_with_discount, 
                category_id: category_id
            }
        })
        return product;
    }
}

export {CreateProductService}


//"enabled": "",
//"name": "Tênis",
//"slug": "",
//"use_in_menu": "",
//"stock": "",
//"description": "Descrição do tênis",
//"price": 40.99,
//"price_with_discount": 10.90,
//"category_id": "12a57159-326b-4306-b243-bb1fba9987fc"