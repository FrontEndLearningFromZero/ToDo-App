const sql = require("./db.js");

// constructor
const Todo = function (todo) {
  this.name = todo.name;
  this.description = todo.description;
  this.status = todo.status;
};

Todo.create = (newTodo, result) => {
  var sqlQuery = "INSERT INTO todos SET ?";
  sql.query(sqlQuery, newTodo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Todo: ", { ...newTodo });
    result(null, { ...newTodo });
  });
};

Todo.createMultiple = (arrTodos, result) => {
  var sqlQuery = `INSERT INTO todos (name, description, status) VALUES ?`;
  sql.query(sqlQuery, [arrTodos], (err, data) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, data);
  });
};

Todo.findById = (findTodo, result) => {
  var sqlQuery = `SELECT * FROM todos WHERE id = ${findTodo.id}`;

  if (findTodo.status) {
    sqlQuery += ` AND status = '${findTodo.status}'`;
  }

  sql.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Todo: ", res);
      result(null, res[0]);
      return;
    }

    // not found Todo with the id
    result({ message: "not_found" }, null);
  });
};

Todo.getAll = (name, status, result) => {
  let sqlQuery = "SELECT * FROM todos";

  if (status) {
    sqlQuery += ` WHERE status = '${status}'`;
  }

  if (name) {
    sqlQuery += ` AND title LIKE '%${name}%'`;
  }

  sql.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("todos: ", res);
    result(null, res);
  });
};

Todo.getAllstatus = (status, result) => {
  var sqlQuery = `SELECT * FROM todos WHERE status = '${status}'`;

  sql.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("todos: ", res);
    result(null, res);
  });
};

Todo.updateById = (Todo, result) => {
  var sqlQuery =
    "UPDATE todos SET name = ?, description = ?, status = ? WHERE id = ?";

  if (!Todo.id) {
    result(null, { message: "id is empty." });
    return;
  }

  sql.query(
    sqlQuery,
    [Todo.name, Todo.description, Todo.status, Todo.id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Todo with the id
        result({ message: "not_found" }, null);
        return;
      }

      console.log("updated Todo: ", { ...Todo });
      result(null, { ...Todo });
    }
  );
};

Todo.updateMultiple = () => {
  // not implemented yet
};

Todo.remove = (id, result) => {
  var sqlQuery = `UPDATE todos SET status = 'deleted' WHERE id = ?`;

  if (!id) {
    result(null, {
      message: "id is empty - don't know which task for deleting",
    });
    return;
  }

  sql.query(sqlQuery, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Todo with the id
      result({ message: "not_found" }, null);
      return;
    }

    console.log("deleted Todo with id: ", id);
    result(null, res);
  });
};

Todo.removeAll = (result) => {
  var sqlQuery = "UPDATE todos SET status = 'deleted'";

  sql.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} todos`);
    result(null, res);
  });
};

Todo.restore = (req, (err, data) => {
  // change stt back to 'active'
})

module.exports = Todo;
