const express = require("express");
const router = express.Router();
const isAuth = require("../isAuth");
const pool = require("../db");

router.get("/account", isAuth, (req, res) => {
  const user = {
    ...req.user,
    loggedIn: true,
  };
  res.json(user);
});

router.post("/new_post", isAuth, async (req, res) => {
  await pool.query("INSERT INTO posts (body, author_id) VALUES ($1, $2)", [
    req.body.post,
    req.user.id,
  ]);
  res.status(200).send();
});

module.exports = router;
