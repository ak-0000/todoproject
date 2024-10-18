const express = require("express");
const { createTodo, updateTodo } = require("../utils/typezod");
const { connectdb } = require("../config/database");
const { Todo } = require("../models/todo");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  // validate if the input is correct or not
  const response = req.body;
  const checkvalidate = createTodo.safeParse(response);
  if (!checkvalidate.success) {
    res.status(411).json({
      msg: "Enter Valid Input",
    });
    return;
  }
  //   if validation is correct , enter the req.body.title and req.body.description in the database
  const { title, description, completed } = req.body;
  const addTodo = new Todo({
    title,
    description,
    completed: false,
  });
  const saveTodo = await addTodo.save();
  res.json({title , description});
});

app.get("/todo", async (req, res) => {
  const todo = await Todo.find({});
  res.json(todo);
});

app.put("/todo/:id", async (req, res) => {
  // validate if input is correct or not
  const response = req.body;
  const checkvalidate = updateTodo.safeParse(response);
  if (!checkvalidate.success) {
    res.status(411).json({
      msg: "Enter valid input",
    });
    return;
  }
  // if validation is correct , enter the req.body and req.body in the database
  const todo = await Todo.findByIdAndUpdate(
    { _id: req.body.id },
    { completed: true }
  );

  res.send("todo marked is completed");
});

connectdb().then(() => {
  console.log("database is connected successfully");
  app.listen(3000, () => {
    console.log("Server is listening at port 3000");
  });
});
