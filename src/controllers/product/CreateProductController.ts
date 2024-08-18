import {Request, Response} from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController{
    async handle(req: Request, res: Response){

        const {enabled, name, slug, use_in_menu, stock, description, price, price_with_discount, category_id} = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            enabled, 
            name, 
            slug, 
            use_in_menu, 
            stock, 
            description, 
            price, 
            price_with_discount, 
            category_id
        });

        return res.json(product)
    }
}

export {CreateProductController}