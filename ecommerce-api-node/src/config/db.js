const  mongoose = require("mongoose")

const mondbUrl="mongodb+srv://priyanshusinghconnect:5t2WbByO4cZ0zlFx@cluster0.mpmejxr.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl)
}

module.exports={connectDb}