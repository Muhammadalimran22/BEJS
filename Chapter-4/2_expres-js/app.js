const express = require("express");
const app = express();
const port = 3000;
const mainRouter = require("./routes/index");
const morgan = require("morgan");

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);
app.use(express.json());
// app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log(data);
  res.send("Hello World");
});

app.use(mainRouter);

// 404 - not found
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "endpoint not found",
  });
});

// 500 - internal server error
app.use((err, req, res, next) => {
  res.status(500).json({
    status: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log("app listening on port " + port);
});
