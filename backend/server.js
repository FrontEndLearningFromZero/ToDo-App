const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors());
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to TODO application." });
});

const start = () => {
  app.listen(PORT, () => {
    try {
      console.log(`Server is running on port ${PORT}.`);
    } catch (error) {
      console.log("Cannot start server");
      console.log(error);
    }
  });
};

// set port, listen for requests
const PORT = process.env.PORT || 8080;

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter your DB (or type 'default'): ",
});

rl.prompt();

rl.on("line", (input) => {
  if (input === "default") {
    console.log("Correct input!");
    rl.close();
    // Server Starts here
    require("./routes/todo.routes.js")(app);
    start();
  } else {
    console.log("Invalid input, please try again.");
    rl.prompt();
  }
}).on("close", () => {
  console.log("Exiting the readline interface...");
});

rl.on("SIGINT", () => {
  console.log("Interrupted by user, closing the readline interface...");

  rl.close();
});
