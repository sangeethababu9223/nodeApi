const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all notes",
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "create a note",
  });
});
router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Display note with ${req.params.id}`,
  });
});
router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update note with ${req.params.id}`,
  });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete note with ${req.params.id}`,
  });
});

module.exports = router;
