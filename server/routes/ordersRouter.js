import { Router } from "express";
import orderController from "../controllers/orderController.js";

const router = new Router();

router.post("/", orderController.create);
router.get("/", orderController.getAll);
router.delete("/:id", orderController.remove);
router.get('/user/:id', orderController.getByUserId );

export default router;
