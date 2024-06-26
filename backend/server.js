const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors());
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to TODO application."});
});

require("./routes/todo.routes.js")(app);
require("./routes/user.routes.js")(app);

db.sequelize
  .sync()
  .then((result) => {
    console.log("=== Synced db. ===");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("=== Failed to sync db: " + err.message + " ===");
  });

// const start = () => {
//   app.listen(PORT, () => {
//     try {
//       console.log(`Server is running on port ${PORT}.`);
//     } catch (error) {
//       console.log("Cannot start server");
//       console.log(error);
//     }
//   });
// };

// const readline = require("node:readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "Enter your DB (or type 'default'): ",
// });

// rl.prompt();

// rl.on("line", (input) => {
//   switch (input) {
//     case "default":
//       console.log("Correct input!");
//       rl.close();
//       // Server Starts here - Check ToDo Routes
//       require("./routes/todo.routes.js")(app);
//       start();
//       rl.close();
//       break;
//     case "none":
//       console.log("No db connected");
//       require("./routes/fakeData.routes.js")(app);
//       start();
//       rl.close();
//       break;
//     default:
//       console.log("Invalid input, please try again.");
//       rl.prompt();
//   }
// }).on("close", () => {
//   console.log("Exiting the readline interface...");
// });

// rl.on("SIGINT", () => {
//   console.log("Interrupted by user, closing the readline interface...");

//   rl.close();
// });
