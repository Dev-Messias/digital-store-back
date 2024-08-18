import {Request, Response} from 'express';
import { UpdateCategoryService } from '../../services/category/UpdateCategoryService';

class UpdateCategoryController{
    async handle(req: Request, res: Response){
        const {category_id, name, slug, use_in_menu} = req.body;

        const updateCategoryService = new UpdateCategoryService();

        const category = await updateCategoryService.execute({
            category_id, 
            name, 
            slug, 
            use_in_menu
        })

        return res.json(category)
    }
}

export {UpdateCategoryController}