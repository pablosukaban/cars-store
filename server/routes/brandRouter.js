import { Router } from 'express';
import brandController from '../controllers/brandController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
router.get('/:id', brandController.getOne);
router.delete('/:id', brandController.delete);

export default router;
