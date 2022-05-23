import express from "express";
import main from "./database/connection";

const app = express();
const port = Number(process.env.PORT) | 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  main();
});
