import { Router } from 'express';
import modelController from '../controllers/modelController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), modelController.create);
router.get('/', modelController.getAll);
router.get('/:id', modelController.getOne);

export default router;
