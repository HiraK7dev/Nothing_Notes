import { Router } from "express";
import signup from "../controllers/signup.js";
import login from "../controllers/login.js";
import profile from "../controllers/profile.js";

const authRouter = Router();

//authentication routes
authRouter.route("/signup").post(signup);
authRouter.route("/login").post(login);
authRouter.route("/me").get(profile);

export default authRouter;
