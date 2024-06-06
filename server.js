const express = require("express");
const app = express();
const { products } = require("./data");

app.set("view engine", "ejs");

app.get("/api/v1/products", (req, res) => {
  res.render("products", {
    products,
    title: "products page",
  });
});
const port = 5050;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
