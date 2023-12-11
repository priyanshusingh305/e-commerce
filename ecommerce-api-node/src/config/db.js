const  mongoose = require("mongoose")

const mondbUrl=""

const connectDb=()=>{
    return mongoose.connect(mondbUrl)
}

module.exports={connectDb}