import { Router } from 'express';
import { factoryController } from '../controllers/helpers/FactoryController';
import UserController from '../controllers/UserController';

const router = Router();
const baseRoute = '/users';

router.post(`${baseRoute}`, factoryController(UserController, 'create'));
router.get(`${baseRoute}`, factoryController(UserController, 'getAll'));
router.get(`${baseRoute}/:userId`, factoryController(UserController, 'getById'));
router.put(`${baseRoute}/:userId`, factoryController(UserController, 'update'));
router.delete(`${baseRoute}/:userId`, factoryController(UserController, 'delete'));

export default router;
