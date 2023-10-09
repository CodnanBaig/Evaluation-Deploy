const { signup, login } = require("../controllers/authController");

const authRouter = require("express").Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

module.exports = authRouter;