module.exports = (app) => {
  const jsonControllers = require("../controllers/fakeData.controllers")

  app.get("/todos/json", jsonControllers.getAllDataJson);
  app.get("/todos/json/:id", jsonControllers.getDataJsonById);

  app.post("/todos/json/:id", jsonControllers.updateDataJsonById);

  app.delete("todos/json/:id", jsonControllers.deleteDataJsonById);
};
