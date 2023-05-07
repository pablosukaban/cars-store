import { Router } from 'express';
import carRouter from './carRouter.js';
import userRouter from './userRouter.js';
import modelRouter from './modelRouter.js';
import brandRouter from './brandRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/car', carRouter);
router.use('/model', modelRouter);
router.use('/brand', brandRouter);

export default router;
