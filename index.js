const express = require("express");
const app = express();
const data = require("./db.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Products");
});

app.get("/products", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
