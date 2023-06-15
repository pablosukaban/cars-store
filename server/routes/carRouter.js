import { Router } from 'express';
import carController from '../controllers/carController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), carController.create);
router.get('/', carController.getAll);
router.get('/:id', carController.getOne);
router.delete('/:id', carController.delete);

export default router;
