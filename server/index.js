import data from "./data.js";
import express from "express";
const app = express();

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/api/products", function (req, res) {
  res.send(data.products);
});
app.get("/", function (req, res) {
  res.send("server is ready");
  console.log(data);
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
