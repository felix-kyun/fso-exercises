import {
  createUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controller.mjs";
import express from "express";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser);

export default router;
