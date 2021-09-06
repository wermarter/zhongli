import express from "express";
import crypto from "crypto";

import config from "../config.js";
import { verifyWebhook, processWebhook } from "../controllers/webhook.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json({ verify: verifyRequestSignature }));

router.get("/", verifyWebhook);
router.post("/", processWebhook);

// Verify that the callback came from Facebook.
function verifyRequestSignature(req, res, buf) {
  var signature = req.headers["x-hub-signature"];

  if (!signature) {
    console.warn(`Couldn't find "x-hub-signature" in headers.`);
  } else {
    const elements = signature.split("=");
    const signatureHash = elements[1];
    const expectedHash = crypto
      .createHmac("sha1", config.appSecret)
      .update(buf)
      .digest("hex");
    if (signatureHash != expectedHash) {
      throw new Error("Couldn't validate the request signature.");
    }
  }
}

export default router;
