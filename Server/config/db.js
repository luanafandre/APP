const config = require("config");
const mongoose = require("mongoose");
//config lib will help us to load our configuration which are required in the application.
const db = "mongodb://localhost:27017/devConnector";

//we have to write a code to connect the mongobd via mongoose
const connectDB = async () => {
  //connect to MongoDB
  try {
    console.log("before connect method");
    await mongoose.connect(db, {});
    console.log("mongodb connected");
  } catch (err) {
    // we will hold the code where we may get an error.

    console.log(err.message);
    //we will handle the error: we will provide the solution to the occurred error/problem.
  }
};
//connectDB();
//console.log("mongodb uri" + db);
//const : keyword : reserved word
// it will
module.exports = connectDB;