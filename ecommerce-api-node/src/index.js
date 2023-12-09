const express=require("express")
const app=express()
const cors=require("cors")

app.use(express.json());
app.use(cors())


app.get("/",(req,res)=>{
    return res.status(200).send({message :"Welcome to ecommmerce api - node",status:true})
})
module.exports=app;
