import { Router } from 'express';
import makeOfCarController from '../controllers/makeOfCarController.js';

const router = new Router();

router.post('/', makeOfCarController.create);
router.get('/', makeOfCarController.getAll);

export default router;
