const db = require("../models/fakeData.model");

exports.getAllDataJson = async (req, res) => {
  try {
    var todoData = await db.getData("/");
    res.send(todoData);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.getDataJsonById = async (req, res) => {
  try {
    var todoData = await db.getData("/" + req.params.id);
    res.send(todoData);
  } catch (err) {
    res.send({
      message: err.message || "[err] ID: " + req.params.id + " not found",
    });
  }
}

exports.createNewToDoJson = async (req, res) => {
  try {
    console.log(req.body)
    // var newTodo = {
    //   id: req.body.id,
    //   name: req.body.name,
    //   description: req.body.description,
    //   status: 1
    // }
    // var todoData = await db.push("/" + newTodo)
    // res.send(todoData)
  } catch (err) {
    res.send({
      message: err.message || "[err] Cannot create a new ToDo",
    });
  }
}

exports.updateDataJsonById = async (req, res) => {
  res.send("update")
}

exports.deleteDataJsonById = async (req, res) => {
  res.send("delete")
};
