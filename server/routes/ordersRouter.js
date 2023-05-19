import { Router } from 'express';
import orderController from '../controllers/orderController.js';

const router = new Router();

router.post('/', orderController.create);

export default router;
