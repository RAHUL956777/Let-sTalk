import { Router } from "express";
import { checkUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check_user", checkUser);

export default router;
