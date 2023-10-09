const Todo = require("../models/todoModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addTodo = async (req, res) => {
  const body = req.body;
  try {
    const todo = await Todo.create({ ...body, userId: req.user.id });
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(404).json(error);
  }
};

exports.getUserTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    return res.status(201).json(todos);
  } catch (error) {
    return res.status(404).json(error);
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);
    return res.status(201).json(todos);
  } catch (error) {
    return res.status(404).json(error);
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const updated_todo = await Todo.findByIdAndUpdate(id, req.body);
    return res.status(201).json(updated_todo);
  } catch (error) {
    return res.status(404).json(error);
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted_todo = await Todo.findByIdAndRemove(id);
    return res.status(201).json(deleted_todo);
  } catch (error) {
    return res.status(404).json(error);
  }
};
