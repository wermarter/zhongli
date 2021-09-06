import express from "express";
import morgan from "morgan";

import { makeAnnouncement, makePoll } from "../controllers/api.js";

const router = express.Router();

router.use(verifyBackend);
router.use(express.json());
router.use(morgan("dev"));

router.post("/announce", makeAnnouncement);
router.post("/poll", makePoll);

function verifyBackend(req, res, next) {
  // TO BE IMPLEMENTED
  next();
}

export default router;
