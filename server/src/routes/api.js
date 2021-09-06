import express from "express";

import { createPoll } from "../controllers/poll.js";

const router = express.Router();

router.post("/poll", createPoll);

export default router;
