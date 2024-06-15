const dbConfig = require("../config/db.config")

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorsAliases: false,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.todo = require("./todo.model.js")(sequelize, Sequelize);

// relationship
db.user.hasMany(db.todo, { as: "todos" })
db.todo.belongsTo(db.user, { foreignKey: "UserId", as: "user" })

module.exports = db;
