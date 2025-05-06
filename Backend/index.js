import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import checkLoinStatus from "./middlewares/checkLoginStatus.js";

export const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//authentication routes
app.use("/", authRouter);

//todo routes
app.use(checkLoinStatus);
app.use("/", todoRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started`);
});
