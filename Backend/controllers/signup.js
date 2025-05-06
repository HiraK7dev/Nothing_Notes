import User from "../models/user.models.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;
  try {
    const encryptPass = await bcrypt.hash(password, saltRounds);
    const result = await User.insertOne({
      username: username,
      email: email,
      password: encryptPass,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export default signup;
