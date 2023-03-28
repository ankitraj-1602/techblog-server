import express from "express";
import { getAllUser, getUser, login, signup } from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.post("/detail/:id", getUser);
export default router;
