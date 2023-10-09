const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const todoRouter = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", authRouter);
app.use("/api", todoRouter);

mongoose
  .connect(`${process.env.DB}evaluation`)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`Connected and running on ${process.env.PORT}`))
  .catch((err) => console.log(err));
