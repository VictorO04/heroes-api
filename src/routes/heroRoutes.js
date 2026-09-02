import { Router } from "express";
import { getHeroes, getHeroById } from "../controllers/heroController.js";

const router = Router();

router.get("/", getHeroes);
router.get("/:id", getHeroById);

export default router;