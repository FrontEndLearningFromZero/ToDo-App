module.exports = app => {
    const todos = require("../controllers/todo.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new todo
    router.post("/", todos.create);
  
    // Retrieve all todos
    router.get("/", todos.findAll);
  
    // Retrieve all published todos
    router.get("/published", todos.findAllPublished);
  
    // Retrieve a single Todo with id
    router.get("/:id", todos.findOne);
  
    // Update a Todo with id
    router.put("/:id", todos.update);
  
    // Delete a Todo with id
    router.delete("/:id", todos.delete);
  
    // Delete all todos
    router.delete("/", todos.deleteAll);
  
    app.use('/api/todos', router);
  };