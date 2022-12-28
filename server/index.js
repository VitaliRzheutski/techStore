const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const { db } = require("./db");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });
const { User } = require("./db");
const passport = require("passport");
// session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my best friend is Cody",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// passport registration
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
// logging middleware
app.use(morgan('dev'))

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api"));
app.use("/auth", require("./auth"));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }); // Send index.html for any other requests

  // error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error");
  });
  

  module.exports = app;