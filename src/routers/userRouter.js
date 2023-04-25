import express from "express";

const userRouter = express.Router(); // /users/~

const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser); // /users/edit

export default userRouter;