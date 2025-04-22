import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "GET all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ message: "GET user by id" });
});

userRouter.post("/", (req, res) => {
  res.send({ message: "Create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ message: "Update user by id" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete user by id" });
});

export default userRouter;