const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/post", (req, res) => {
  res.send("heloo");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
