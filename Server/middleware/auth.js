//validate the token
const jwt = require("jsonwebtoken");
const secret = "jwtSecret";
//req: request
//res: response
//next: next handler/callback.
module.exports = (req, res, next) => {
  //get the token
  console.log("hello from auth middleware");
  const token = req.header("x-auth-token");
  //header: x-auth-token.
  console.log(token);
  if (!token) {
    return res.status(401).json({
      error: "no token, authorization denied",
    });
  }
  //verify the token:IMP
  try {
    jwt.verify(token, "jwtSecret", (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "token is invalid" });
      } else {
        req.user = decoded.user;
        //user details will be attached to the existing request.
        next();
        //next willnext middleware / it will go to the router
      }
    });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ msg: "server error" });
  }
};
