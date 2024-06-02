module.exports = app => {
    const todos = require("../controllers/todo.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new todo
    router.post("/", todos.create);
    router.post("/create-multiple", todos.createMultiple);
  
    // Retrieve all todos
    router.get("/", todos.findAll);
  
    // Retrieve all published todos
    router.get("/published", todos.findAllPublished);
  
    // Retrieve a single Todo with id
    router.get("/get-by-id/", todos.findOne);
    router.get("/get-by-id/:id", todos.findOne);
  
    // Update a Todo with id
    router.put("/update-by-id", todos.update);
    router.put("/update-by-id/:id", todos.update);
    router.put("/update-by-id/:id/:name", todos.update);
    router.put("/update-multiple/:id", todos.updateMultiple);
  
    // Delete a Todo with id
    router.delete("/:id", todos.delete);
  
    // Delete all todos
    router.delete("/", todos.deleteAll);
  
    app.use('/api/todos', router);
  };