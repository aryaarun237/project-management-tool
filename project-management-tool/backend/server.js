require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Fetch MongoDB URI from .env

// Check if MongoDB URI is provided
if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in .env file");
  process.exit(1); // Stop the server
}

// ✅ Middleware to parse JSON requests
app.use(express.json());  // Required for parsing JSON body
app.use(express.urlencoded({ extended: true })); // Optional: Parse URL-encoded data

// ✅ Enable CORS (Cross-Origin Requests)
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"], // Allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // If you use authentication (e.g., cookies, JWT)
}));

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Debugging middleware (Logs incoming requests)
app.use((req, res, next) => {
  console.log(`📩 Incoming Request: ${req.method} ${req.url}`);
  console.log("📄 Request Body:", req.body);
  next();
});

// ✅ Sample authentication routes (for testing)
app.post("/auth/signup", (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res.json({ message: "✅ Signup successful!" });
});

app.post("/auth/signin", (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: "❌ Email and password required" });
  }

  res.json({ message: "✅ Signin successful!", token: "dummy_token_123" });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
