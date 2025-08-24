const express = require("express");
const {User} = require("../models/users.js");
const userRouter = express.Router();
const {
  handleGetAllUsers,
  handleGetUserInfo,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleGetUserByName,
} = require("../controllers/users.js");

userRouter.route("/").get(handleGetAllUsers).post(handleGetUserInfo);

// route to get any user with its id using dynamic paramters
userRouter.route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// route to get any user with its first name
userRouter.get("/name/:first_name", handleGetUserByName);

module.exports = userRouter;
