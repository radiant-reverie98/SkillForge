import express from "express";
import { oauthLogin } from "../controllers/auth.controller.js";

const router = express.Router();


router.post("/oauth", oauthLogin);

export default router;
