import { Router } from "express";
import creditController from "../controllers/creditController.js";

const router = new Router();

router.get("/", creditController.getAll);
router.post("/", creditController.create);

export default router;
