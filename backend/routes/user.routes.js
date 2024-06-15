module.exports = app => {
    const user = require("../controllers/user.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", user.create);
  
    // Retrieve all user
    router.get("/all", user.findAllWithoutToDo);
    router.get("/all-with-todos", user.findAllWithToDo);
    
    // Retrieve a single User with id
  
    // Update a User with id
  
    // Delete a User with id
    // router.delete("/:id", user.delete);
  
    // Delete all user
    // router.delete("/", user.deleteAll);
  
    app.use('/api/user', router);
  };