require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { PORT = 3000, SESSION_SECRET_KEY } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

const authRouter = require("./routes/auth.routes");
app.use(authRouter);

// 404 error handling
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "Not Found",
    data: null,
  });
});

// 500 error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: false,
    message: "Internal Server Error",
    data: err.message,
  });
});

app.listen(PORT, () => console.log("server nyala", PORT));
