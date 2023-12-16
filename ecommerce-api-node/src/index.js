const express=require("express")
const app=express()
const cors=require("cors")

app.use(express.json());
app.use(cors())


app.get("/",(req,res)=>{
    return res.status(200).send({message :"Welcome to ecommmerce api - node",status:true})
})

const authRouters=require("./routes/auth.routes.js")
app.use("/auth",authRouters)


const userRouters=require("./routes/user.routes.js")
app.use("/api/users",userRouters);

const productRouter=require("./routes/product.routes.js")
app.use("/api/products",productRouter)

const adminProductRouter= require("./routes/adminProduct.routes.js")
app.use("/api/admin/products",adminProductRouter)

const cartRouter=require("./routes/cart.routes.js")
app.use("/api/cart",cartRouter)

const cartItemRouter=require("./routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter)

const orderRouter=require("./routes/order.routes.js")
app.use("/api/orders",orderRouter)

const adminOrderRouter=require("./routes/adminOrder.routes.js")
app.use("/api/admin/orders",adminOrderRouter)

const reviewRouter=require("./routes/review.routes.js")
app.use("/api/review",reviewRouter)

const ratingRouter=require("./routes/rating.routes.js")
app.use("/api/rating",ratingRouter)


module.exports=app;
