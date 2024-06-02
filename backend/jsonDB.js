module.exports = app => {
    const { JsonDB, Config } = require("node-json-db");

    var db = new JsonDB(new Config("data.json", true, false, '/'));

    app.get("/todos/json", async (req, res) => {
        var todoData = await db.getData("/");
        res.send(todoData)
    })
}
