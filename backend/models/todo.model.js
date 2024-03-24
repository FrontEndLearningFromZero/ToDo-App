const sql = require("./db.js");

// constructor
const Todo = function(todo) {
  this.title = todo.name;
  this.description = todo.description;
  this.status = todo.status;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todos SET ?", newTodo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Todo: ", { id: res.insertId, ...newTodo });
    result(null, { id: res.insertId, ...newTodo });
  });
};

Todo.findById = (id, result) => {
  sql.query(`SELECT * FROM todos WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Todo: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Todo with the id
    result({ kind: "not_found" }, null);
  });
};

Todo.getAll = (name, result) => {
  let query = "SELECT * FROM todos";

  if (name) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("todos: ", res);
    result(null, res);
  });
};

Todo.getAllstatus = result => {
  sql.query("SELECT * FROM todos WHERE status=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("todos: ", res);
    result(null, res);
  });
};

Todo.updateById = (id, Todo, result) => {
  sql.query(
    "UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?",
    [Todo.title, Todo.description, Todo.status, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Todo with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Todo: ", { id: id, ...Todo });
      result(null, { id: id, ...Todo });
    }
  );
};

Todo.remove = (id, result) => {
  sql.query("DELETE FROM todos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Todo with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Todo with id: ", id);
    result(null, res);
  });
};

Todo.removeAll = result => {
  sql.query("DELETE FROM todos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} todos`);
    result(null, res);
  });
};

module.exports = Todo;