const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Server is healthy and running123",
    timestamp: new Date().toISOString(),
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Node server running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
