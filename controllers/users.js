const {User} = require("../models/users.js");

async function handleGetAllUsers(req, res) {
  try {
    const allUsers = await User.find({});
    return res.json(allUsers);
  } catch (error) {
    console.log("Error while sending response of db call in /api/users", error);
    return res.status(404).json({ Error: "Cannot send response of request " });
  }
}
async function handleGetUserInfo(req,res) {
    try {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({
        fields: "missing",
        first_name: `${body.first_name}`,
        last_name: `${body.last_name}`,
        email: `${body.email}`,
        gender: `${body.gender}`,
        job_title: `${body.job_title}`,
      });
    }
    // I am adding document in the collection users in database
    const user = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    console.log("Result", user);
    return res.status(201).json({ status: "added in database",
        "id":`${user.id}`
     });
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
}
async function handleGetUserById(req,res) {
     try {
        const user_id = await User.findById(req.params.id);
        if (!user_id) {
          return res.status(404).json({ Response: "Cannot find the id" });
        }
        return res.status(200).send(user_id);
      } catch (error) {
        console.log("Error finding user by ID:", error);
        return res.status(404).json({ Response: "Invalid ID format" });
      }
}
async function handleUpdateUserById(req,res) {
    const changedLastName = req.body.last_name;
      if (!changedLastName) {
        return res.status(400).json({ missing: "last Name" });
      }
      try {
        await User.findByIdAndUpdate(req.params.id, { last_name: changedLastName });
        return res.status(200).json({ "Last name": "changed!" });
      } catch (error) {
        console.log("Cannot change last name", error);
        return res.status(404).json({ error: "failed" });
      }
}
async function handleDeleteUserById(req,res) {
    try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "deleted" });
  } catch (error) {
    console.log("Error while deleting by ID", error);
    return res.status(404).json({ status: "error while deleting the id" });
  }
}
async function handleGetUserByName(req,res) {
    try {
    const name = req.params.first_name;
    const allUsers = await User.find({});
    const displayName = allUsers.find((user) => user.first_name === name);
    if (!displayName) {
      return res.status(404).json({ error: "404 Not Found" });
    }
    return res.json(displayName);
  } catch (error) {
    console.log("Error finding user by name:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
module.exports = {
    handleGetAllUsers,
    handleGetUserInfo,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleGetUserByName
};
