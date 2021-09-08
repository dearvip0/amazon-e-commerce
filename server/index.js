import data from "./data.js";
import express from "express";
const app = express();

app.get("/api/products", function (req, res) {
  res.send(data.products);
});
app.get("/", function (req, res) {
  res.send("server is ready");
  console.log(data);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
