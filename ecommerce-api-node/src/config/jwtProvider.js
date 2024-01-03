const jwt=require("jsonwebtoken")
require("dotenv").config();



const SECRET_KEY=process.env.SECRET_KEY


const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}


const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    // console.log(decodedToken)
    return decodedToken.userId;
}

module.exports={generateToken,getUserIdFromToken}