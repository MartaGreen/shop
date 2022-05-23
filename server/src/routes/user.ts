import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get users");
});

export default router;
