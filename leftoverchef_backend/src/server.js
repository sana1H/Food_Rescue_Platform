// this starts the app

// to import express

const express = require("express");
require("dotenv").config();
const app = express(); // start the app
// GET /api/health
// app.get("/api/health", (req, res) => {
//   res.json({ status: "ok" });
// });

const connectDB = require("./config/db");
connectDB().then(() => {
  app.listen(5000, () => console.log("server running"));
});
