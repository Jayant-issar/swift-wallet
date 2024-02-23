// this api handles all the middleware logic
const JWT_SECRET = require('./config')
const jwt  = require('jsonwebtoken');

//creating the aut middleware for the authentication of the header token ["NOT TESTED YET"]
const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization; // here we are looking for the value of somethig coming from header labled as authorization and then assigning it back to the variabel for further use

    //sending a error is the header is not there or the header is not correct or the header string
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(403).json({
            message: 'no token in header or wrong token format'
        })

    }
    
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.decode(token,JWT_SECRET)

        if(decoded.userId){
            req.userId = decoded.userId
            next();
        }else{
            res.json({
                message: "error occured while fetching userId from auth header"
            })
        }
        
    }catch(err){
        res.status(401).json({
            message: "there is some issue with the token"
        })
    }

}

module.exports = {
    authMiddleware
}