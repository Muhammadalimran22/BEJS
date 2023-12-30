require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const pool = require("./external/postgres");

app.use(express.urlencoded());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("welcome", { appName: "APP KEREN" });
});

app.get("/posts", async (req, res) => {
  const result = await pool.query("SELECT * FROM posts ORDER BY id");
  res.render("getAllPost", { posts: result.rows });
});

app.get("/posts/create", async (req, res) => {
  res.render("createPost");
});

app.post("/posts", async (req, res) => {
  const { title, body } = req.body;
  await pool.query(
    "INSERT INTO posts (title, body) values ($1, $2) RETURNING *;",
    [title, body]
  );

  res.redirect("/posts");
});

app.listen(PORT, () => console.log("listening on port", PORT));
