const { JsonDB, Config } = require("node-json-db");
const db = new JsonDB(new Config("./fake-data.json", true, false, "/"));

module.exports = db;