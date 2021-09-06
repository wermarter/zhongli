import express from "express";
import { handlePollUpdate } from "../controllers/chatbot.js";

const router = express.Router();

router.post("/poll", handlePollUpdate);

export default router;
