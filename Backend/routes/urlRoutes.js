import { Router } from "express";
import signup from "../controllers/signup.js";
import login from "../controllers/login.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
