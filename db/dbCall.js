const mongoose  = require('mongoose');

const DBCall = async function () {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/project-1");
    console.log("Mongo Db connected");
  } catch (error) {
    console.log("Error while connecting to Db", error);
  }
};

module.exports = DBCall;
