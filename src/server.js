/**
 * Created by trungquandev.com's author.
 */
import express from "express";

const app = express();

const port = 8017;

app.get("/", (req, res) => {
  res.end("<h1>Hello World!</h1><hr>");
});

app.listen(port, () => {
  console.log(`Hello Trung Quan Dev, I am running at :${port}/`);
});
