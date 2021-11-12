const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./auth.js");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const authRouter = require("./routes/authRouter");
app.use("/auth", authRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server listening on port 4000");
});
