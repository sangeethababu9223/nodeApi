const express = require("express");
const dotenv = require("dotenv");

//Route files
const router = require("./routes/notes");

// Load env vars
dotenv.config({ path: "./config/config.env" });
const app = express();

//Mount Router
app.use("/api/v1/notes", router);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
