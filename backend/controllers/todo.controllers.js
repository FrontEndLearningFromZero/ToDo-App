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
    name: req.body.name,
    description: req.body.description,
    status: req.body.status || "active",
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

// Create and Save a new Todo
exports.createMultiple = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  var arrTodos = req.body.map((item) => {
    const todo = new Todo({
      name: item.name,
      description: item.description,
      status: item.status || "active",
    });
    return [todo.name, todo.description, todo.status];
  });

  // Save Todo in the database
  Todo.createMultiple(arrTodos, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    else res.send(data);
  });
};

// Retrieve all Todos from the database (with condition).
exports.findAll = (req, res) => {
  const nameTodo = req.query.name;
  const statusTodo = req.query.status;

  Todo.getAll(nameTodo, statusTodo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Todos.",
      });
    else res.send(data);
  });
};

// Find a single Todo with a id
exports.findOne = (req, res) => {
  const findTodo = {
    id: req.body.id || req.params.id || req.query.id,
    status: req.body.status || req.params.status || req.query.status,
  };

  Todo.findById(findTodo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Cannot find the id.",
      });
    } else {
      res.send(data);
    }
  });
};

// find all published Todos
exports.findAllPublished = (req, res) => {
  var status = req.body.status || req.query.status || "active";

  Todo.getAllstatus(status, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "[findAllPublished] Cannot find Todo(s).",
      });
    } else {
      res.send(data);
    }
  });
};

// Update a Todo identified by the id in the request
exports.update = (req, res) => {
  var updatedTodo = {
    id: req.body.id || req.params.id || req.query.id,
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  };

  Todo.updateById(updatedTodo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "[update] Cannot update the id",
      });
    } else {
      res.send(data);
    }
  });
};

exports.updateMultiple = (req, res) => {
  Todo.updateMultiple(arr, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "[update] Cannot update multiple Todos",
      });
    } else {
      res.send(data);
    }
  });
};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
  var id = req.body.id || req.query.id || req.params.id;

  Todo.remove(id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "[delete] Cannot remove the id",
      });
    } else {
      res.send(data);
    }
  });
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
  Todo.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "[deleteAll] Cannot remove all ids.",
      });
    } else {
      res.send(data);
    }
  });
};
