import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Homepage of Subha");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
