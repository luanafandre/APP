// router: to handle routing for the specific part.// auth
//we need to load the express module
const express = require("express");
const router = express.Router();
//@route get API/auth
//@desc Get user by token
//@access Private
router.get("/",auth, function (req, res) {
  res.json({
    message: "Hello from Auth!",
  });
});

module.exports = router;

//get: http get method: to retrieve data
// "/": end point for exchanging data
// full end point spec: /api/auth
//function: but prefered is arrow function:
// req: request object(which will bring the data from the client/consumer)
//res: response object which will help us to share the response to client based on the request it will process it and finally it will share it.
// res.json: res.object: json()==>function===>it will return the data in terms of JSON object i.e. key value pair
//