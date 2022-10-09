const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/:name", (req, res) => {
  res.json({ message: "Hello from server!" + req.params.name });
});
app.get("/api/:name/:name1", (req, res) => {
  res.json({ message: "Hello from server!" + req.params.name + " and " + req.params.name1});
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use(express.static("../build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
