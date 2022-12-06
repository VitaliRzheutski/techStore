const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

// logging middleware
app.use(morgan('dev'))

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }); // Send index.html for any other requests

  // error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error");
  });
  

  module.exports = app;