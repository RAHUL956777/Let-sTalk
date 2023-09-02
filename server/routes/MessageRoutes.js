import { Router } from "express";
import {
  addAudioMessage,
  addImageMessage,
  addMessage,
  getMessages,
} from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const uploadImage = multer({ dest: "uploads/images" });
const upload = multer({ dest: "uploads/recordings" });

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage);
router.post("/add-audio-message", upload.single("audio"), addAudioMessage);

export default router;
