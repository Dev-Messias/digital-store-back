import {Request, Response} from 'express';
import { ListCategorySerevice } from '../../services/category/ListCategoryService';

class ListCategoryController{
    async handle(req: Request, res:Response){
        const listCategoryService = new ListCategorySerevice();

        const category = await listCategoryService.execute();

        return res.json(category)
    }
}

export {ListCategoryController}