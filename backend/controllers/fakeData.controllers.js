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

exports.updateDataJsonById = async (req, res) => {
  // test_branch
}

exports.deleteDataJsonById = async (req, res) => {

};
