import { Router } from "express";
const authRouter = Router();

authRouter.post("/register", (req, res) => {
  res.send({ message: "User Registration" });
});

authRouter.post("/login", (req, res) => {
  res.send({ message: "User Login" });
});

export default authRouter;