import express from "express";
import { showInfo } from "../controllers/info.controller.mjs";

const router = express.Router();

router.get("/", showInfo);

export default router;
