const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });
const app = express();

app.get("/api/v1/notes", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all notes",
  });
});
app.post("/api/v1/notes", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "create a note",
  });
});
app.get("/api/v1/notes/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Display note with ${req.params.id}`,
  });
});
app.put("/api/v1/notes/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update note with ${req.params.id}`,
  });
});
app.delete("/api/v1/notes/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete note with ${req.params.id}`,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
