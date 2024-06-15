module.exports = (app) => {
  const jsonControllers = require("../controllers/fakeData.controllers")

  app.get("/todos/json", jsonControllers.getAllDataJson);
  app.get("/todos/json/:id", jsonControllers.getDataJsonById);

  app.put("/todos/json/:id", jsonControllers.updateDataJsonById);

  app.post("todos/json/create", jsonControllers.createNewToDoJson)

  app.delete("todos/json/remove/:id", jsonControllers.deleteDataJsonById);
};
