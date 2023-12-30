const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time :", Date.now());
  next();
});

router.get("/produk", (req, res) => {
  res.json([
    { id: 1, name: "apple" },
    { id: 2, name: "samsung" },
    { id: 3, name: "huawei" },
  ]);
});

router.get("/users", (req, res) => {
  res.json([
    { id: 1, produk_id: 3, user_id: 1 },
    { id: 2, produk_id: 2, user_id: 2 },
    { id: 3, produk_id: 1, user_id: 3 },
  ]);
});

router.post("/orders", (req, res) => {
  res.json(req.body);
});

module.exports = router;
