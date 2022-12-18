//validate the objectID from Mongo DB

const mongoose = require("mongoose");
const checkObjectID = (idToCheck) => (res,req,next) => {
    //request: which is coming from the client;
    // response: which is going to the client;
    // next: which will be the next request handler;
    if(!mongoose.Types.ObjectId.isValid(req.params[idToCheck])){
        return res.status(400).json({
            error: "Invalid ObjectId",
        });
    } else next();
};

module.exports = checkObjectID;