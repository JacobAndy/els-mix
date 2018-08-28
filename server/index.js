require("dotenv").config();
const express = require("express"),
  app = express(),
  session = require("express-session"),
  cors = require("cors"),
  massive = require("massive"),
  PORT = 9001,
  passport = require("passport"),
  strategy = require("./controllers/strategy"),
  flash = require("connect-flash");

app.use(express.json());
app.use(cors());
app.use(flash());
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

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser(function(user, done) {
  console.log("ser");
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("deser");
  done(null, obj);
});

massive(process.env.DATABASE_URL)
  .then(db => {
    console.log("SUCCESS");
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:9001/me",
    failureRedirect: "http://localhost:9001/me",
    failureFlash: true
  })
);
app.get("/me", (req, res, next) => {
  res.status(200).json("hello world");
  // if (!req.user) {
  //   res.redirect("/login");
  // } else {
  //   // req.user === req.session.passport.user
  //   // console.log( req.user )
  //   // console.log( req.session.passport.user );
  //   res.status(200).send(JSON.stringify(req.user, null, 10));
  // }
});

app.listen(PORT, () => console.log(`${PORT}, Shelby Drive Look Alive`));
