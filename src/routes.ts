import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { CreateProductImgController } from './controllers/productImg/CreateProductImgController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { isAuthenticate } from './middlewares/isAuthenticate';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));//pasta salvar img

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)
router.put('/users', isAuthenticate, new UpdateUserController().handle)

//-- ROTAS CATEGORY --
router.post('/category', isAuthenticate, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle);

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticate, new CreateProductController().handle)
router.get('/category/product', new ListByCategoryController().handle)

//-- ROTAS PRODUCTIMG --
router.post('/product-img', isAuthenticate, upload.single('file'), new CreateProductImgController().handle)

export { router };