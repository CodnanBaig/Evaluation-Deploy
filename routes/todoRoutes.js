const { addTodo, getUserTodos, updateTodo, deleteTodo, getSingleTodo } = require("../controllers/todoController");
const verifyToken = require("../middlewares/verifyToken");

const todoRouter = require("express").Router();

todoRouter.post("/todos", verifyToken, addTodo);
todoRouter.get("/todos", getUserTodos);
todoRouter.get("/todos/:id", verifyToken, getSingleTodo);
todoRouter.delete("/todos/:id", verifyToken, deleteTodo)
todoRouter.put("/todos/:id",verifyToken, updateTodo);

module.exports = todoRouter;