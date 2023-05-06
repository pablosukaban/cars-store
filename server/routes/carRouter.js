import { Router } from 'express';
import carController from '../controllers/carController.js';

const router = new Router();

router.post('/', carController.create);
router.get('/', carController.getAll);
router.get('/:id', carController.getOne);

export default router;
