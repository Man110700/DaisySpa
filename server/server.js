const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ server NodeJS!" });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy ở http://localhost:${PORT}`);
});
