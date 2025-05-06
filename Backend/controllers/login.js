import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //checking if the username is valid or not
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(404).send({ message: "User not found" });
    }
    //checking if the password is valid or not
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).send({ message: "Invalid password" });
    }
    //generating a jwt token
    const result = jwt.sign(
      {
        data: {
          _id: user._id,
          username: user.username,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.status(200).send({ message: "Login successful", token: result });
  } catch (error) {
    res.status(500).send({ message: "error" });
  }
};

export default login;
