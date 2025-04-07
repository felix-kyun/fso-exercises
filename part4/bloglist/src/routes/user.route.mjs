import { createUser, getAllUsers } from "../controllers/user.controller.mjs";
import express from "express";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

export default router;
