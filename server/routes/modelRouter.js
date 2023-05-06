import { Router } from 'express';
import modelController from '../controllers/modelController.js';

const router = new Router();

router.post('/', modelController.create);
router.get('/', modelController.getAll);

export default router;
