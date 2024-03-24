const Todo = require("../models/todo.model.js");

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Todo
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  });

  // Save Todo in the database
  Todo.create(todo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    else res.send(data);
  });
};

// Retrieve all Todos from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Todo.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Todos.",
      });
    else res.send(data);
  });
};

// Find a single Todo with a id
exports.findOne = (req, res) => {};

// find all published Todos
exports.findAllPublished = (req, res) => {};

// Update a Todo identified by the id in the request
exports.update = (req, res) => {};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {};
