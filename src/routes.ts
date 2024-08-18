import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';


import { isAuthenticate } from './middlewares/isAuthenticate';

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)

//-- ROTAS CATEGORY --
router.post('/category', isAuthenticate, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle);

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticate, new CreateProductController().handle)

export { router };