require("dotenv").config();
const express = require("express"),
  app = express(),
  session = require("express-session"),
  cors = require("cors"),
  massive = require("massive"),
  PORT = 9001,
  passport = require("passport"),
  { strategy } = require("./controllers/auth0");

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: () => (app.get("env") === "production" ? true : false)
      // maxAge: 1814400000 //3 weeks
    }
  })
);

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.DATABASE_URL)
  .then(db => {
    console.log("SUCCESS");
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`${PORT}, Shelby Drive Look Alive`));
