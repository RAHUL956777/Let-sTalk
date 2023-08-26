import { Router } from "express";
import { addMessage } from "../controllers/MessageController.js";

const router = Router();

router.post("/add-message", addMessage);

export default router;
