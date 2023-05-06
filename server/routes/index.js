import { Router } from 'express';
import carRouter from './carRouter.js';
import userRouter from './userRouter.js';
import modelRouter from './modelRouter.js';
import makeOfCarRouter from './makeOfCarRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/car', carRouter);
router.use('/car_model', modelRouter);
router.use('/make', makeOfCarRouter);

export default router;
