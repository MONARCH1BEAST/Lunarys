const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const thoughtRoutes = require("./routes/thoughts");
const authRoutes = require("./routes/auth");

const app = express();

// Connect DB
connectDB();

// Parse JSON
app.use(express.json());

// Root directory
const ROOT_DIR = path.resolve(__dirname, "..");

// =========================
// STATIC FILES
// =========================
app.use("/assets", express.static(path.join(ROOT_DIR, "assets")));
app.use("/css", express.static(path.join(ROOT_DIR, "css")));
app.use("/js", express.static(path.join(ROOT_DIR, "js")));

// =========================
// PAGE ROUTES (LOGIN FIRST)
// =========================

// LOGIN FIRST
app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "login.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.html"));
});

app.get("/write", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "write.html"));
});

app.get("/locked", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "locked.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "about.html"));
});

// =========================
// API ROUTES
// =========================
app.use("/api/auth", authRoutes);
app.use("/api/thoughts", thoughtRoutes);

// =========================
// SERVER START
// =========================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
