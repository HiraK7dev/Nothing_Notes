import jwt from "jsonwebtoken";

const checkLoinStatus = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.status(401).json({ message: "Token is required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded.data._id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default checkLoinStatus;
