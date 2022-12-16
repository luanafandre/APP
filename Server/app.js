console.log("hello from Luana");
// we have to create the server and mapping the end points.

// we have to work with require function : it will help us to load the file / module.

const express = require("express");
const connectDB = require("./config/db");
// we have loaded the express module.
connectDB()

const app = express();

app.use(express.json());
//express.json : will take care of parsing the request content into json format.
// define the routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

// express () is a function that will provide us the express application/ server

// this expres

// port :will have unique numbers but used to exchange the data over the network or internet.
// we need to use the port as per the environment variable.
// if env variable there use that if not use 5005
// use port

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
