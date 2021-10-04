import { Router } from 'express';
import { factoryController } from '../controllers/helpers/FactoryController';
import AuctionController from '../controllers/AuctionController';

const router = Router();
const baseRoute = '/auctions';

router.post(`${baseRoute}`, factoryController(AuctionController, 'create'));
router.get(`${baseRoute}`, factoryController(AuctionController, 'getAll'));
router.get(`${baseRoute}/:auctionId`, factoryController(AuctionController, 'getById'));
router.put(`${baseRoute}/:auctionId`, factoryController(AuctionController, 'update'));
router.delete(`${baseRoute}/:auctionId`, factoryController(AuctionController, 'delete'));

export default router;
