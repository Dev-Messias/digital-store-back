import {Request, Response} from 'express';
import { CreateProductImgService } from '../../services/productImg/CreateProductImgService';

class CreateProductImgController{
    async handle(req: Request, res:Response){
        const {enabled,  product_id} = req.body;

        const createProductImgService = new CreateProductImgService();

        if(!req.file){
            throw new Error("error upload file")
        }else{

           
            const { originalname, filename: path  } = req.file;

            const productImg = await createProductImgService.execute({
                enabled, 
                path, 
                product_id
            });
    
            return res.json(productImg)

        }
       
    }
}

export {CreateProductImgController}