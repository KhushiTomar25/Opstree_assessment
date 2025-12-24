const express = require("express");
const cors = require("cors");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// In-memory storage
let questions = [];

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Upload CSV route
app.post("/upload", upload.single("file"), (req, res) => {
  const results = [];

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log("CSV parsed data:", results);
      questions = results; // overwrite instead of concat
      fs.unlinkSync(req.file.path);

      res.json({
        message: "CSV uploaded successfully",
        count: results.length
      });
    });
});

// Get questions (with filters)
app.get("/questions", (req, res) => {
  const { role, technology, yoe } = req.query;

  let filtered = questions;

  if (role) {
  filtered = filtered.filter(
    q => q.role.toLowerCase() === role.toLowerCase()
  );
}

if (technology) {
  filtered = filtered.filter(
    q => q.technology.toLowerCase().includes(technology.toLowerCase())
  );
}

if (yoe) {
  filtered = filtered.filter(q => q.yoe === yoe);
}


  res.json(filtered);
});

// 🚀 ALWAYS LAST
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
