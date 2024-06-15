const db = require("../models");
const User = db.user;
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
  const user = {
    id: req.body.id,
    name: req.body.name,
  };

  // Save Todo in the database
  User.create(user)
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while creating User.",
  }))
};

exports.findAllWithoutToDo = (req, res) => {
  User.findAll()
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while getting All Users.",
  }))
}

exports.findAllWithToDo = (req, res) => {
  User.findAll({
    include: [{
      association: "todos",
      attributes: [ "id", "name", "description", "status" ]
    }],
    attributes: [ "id", "name" ]
  })
  .then(data => res.send(data))
  .catch(err => res.status(500).send({
    message: err.message || "Some error occurred while getting All Users.",
  }))
}