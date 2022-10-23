const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const apiData = require("./data.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send(apiData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
