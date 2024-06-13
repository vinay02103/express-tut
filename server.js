// server.js

const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
