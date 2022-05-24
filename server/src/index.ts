import express from "express";
import main from "./entity/connection";

// routes
import userRouter from "./routes/user.routes";

const app = express();
app.use(express.json());
const port = Number(process.env.PORT) | 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  main();
});
