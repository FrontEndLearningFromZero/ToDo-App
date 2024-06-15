const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Todo
  const todo = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    status: req.body.status || 1,
    UserId: req.body.UserId
  };

  // Save Todo in the database
  Todo.create(todo)
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while creating the Todo.",
  }))
};

exports.findAllWithoutUser = (req, res) => {
  Todo.findAll()
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while retrieving Todos.",
  }))
};

exports.findAllWithUser = (req, res) => {
  Todo.findAll({
    include: [{
      association: "user",
      attributes: [ "id", "name" ]
    }],
    attributes: [ "id", "name", "description", "status", "UserId" ]
  })
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
      message: err.message || "Some error occurred while retrieving Todos.",
    })
  )
};

// Find a single Todo with a id
exports.findOne = (req, res) => {
  Todo.findByPk(req.body.id || req.params.id)
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Cannot find the id.",
  }))
};

// find all published Todos
exports.findAllPublished = (req, res) => {

};

// Update a Todo identified by the id in the request
exports.update = (req, res) => {

};


// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
  Todo.destroy({
    where: {
      id: req.body.id || req.params.id
    }
  })
  .then(data => res.send({ result: data }))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while deleting Todo.",
  }))
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {

};
