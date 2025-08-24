const express = require('express');
// Importing model of Users
const Users = require("./models/users.js");
 // creating application using express
const app = express();
const PORT = 9000;
// Importing an express router 
const userRouter = require("./routes/users.js");
// Importing a function for DataBase Call
const DBCall = require('./db/dbCall.js');
// Importing a log file middleware
const {logreqRes} = require('./middlewares/index.js');


DBCall();


app.use(express.urlencoded({ extended: false }));

app.use(logreqRes("Log.txt"));

app.use("/users", userRouter);

 

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
