import {Request, Response} from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController{
    async handle(req: Request, res: Response){

        const {product_id, enabled, name, slug, use_in_menu, stock, description, price, price_with_discount, category_id } = req.body;

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            product_id, 
            enabled, 
            name, 
            slug, 
            use_in_menu, 
            stock, 
            description, 
            price, 
            price_with_discount, 
            category_id
        })

        return res.json(product);
    }
}

export {UpdateProductController}