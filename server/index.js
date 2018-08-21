require("dotenv").config();
const express = require("express"),
  app = express(),
  session = require("express-session"),
  cors = require("cors"),
  massive = require("massive"),
  PORT = 9001;

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1814400000 //3 weeks
    }
  })
);
massive(process.env.DATABASE_URL)
  .then(db => {
    console.log("SUCCESS");
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`${PORT}, Shelby Drive Look Alive`));
