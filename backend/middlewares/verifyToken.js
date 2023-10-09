const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(404).json({ message: "Not Authorized" });
  }
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET, (err, decode) => {
      if (err) {
        return res.status(404).json({ message: "Incorrect Token" });
      }
      req.user = decode;
      next();
    });
  }
};


module.exports = verifyToken;