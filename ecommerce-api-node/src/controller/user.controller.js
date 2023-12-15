const userService=require("../services/user.service.js")

const userController={

 getUserProfile: async(req,res)=>{
     const jwt=req.headers.authorization.split(" ")[1];
    console.log("req :",jwt)
    // console.log(req.headers.authorization.split(" ")[1])
    try {
        
        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(jwt)
        return res.status(200).send(user)
    } catch (error) {

        return res.status(500).send({error:error.message})
    }
},

getAllUsers: async(req,res)=>{
    console.log("working controller")

    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

}


module.exports=userController;