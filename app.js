const path = require("path");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.static("./public"));
app.set("view engine", "ejs");

// app.get("/miniblog", (req, res) => {
//   res.sendFile(path.join(__dirname, "./browser-app/index.html"));
// });

// SERVING MINIBLOG FILE WITH EJS
app.get("/miniblog", (req, res) => {
  res.render("index", {
    title: "miniblog",
  });
});
// ROUTES
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>This is Contact Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is About Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Oops!! Page Not Found</h1>");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server Listening on PORT: ${port}`);
});
