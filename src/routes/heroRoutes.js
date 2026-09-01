import { Router } from "express";
import { getHeroes } from "../controllers/heroController.js";

const router = Router();

router.get("/", getHeroes);

export default router;