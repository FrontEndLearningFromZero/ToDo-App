module.exports = app => {
    const todos = require("../controllers/todo.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new todo
    router.post("/", todos.create);
  
    // Retrieve all todos
    router.get("/all", todos.findAllWithoutUser);
    router.get("/all-with-user", todos.findAllWithUser);
    
    router.get("/find-by-id", todos.findOne);
    router.get("/find-by-id/:id", todos.findOne);

    // Delete a Todo with id
    router.delete("/delete-by-id", todos.delete);
    router.delete("/delete-by-id/:id", todos.delete);
  
    // Delete all todos
    router.delete("/", todos.deleteAll);
  
    app.use('/api/todos', router);
  };