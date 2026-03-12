//create express app
import exp from  'express'
import {connect} from 'mongoose'
import {productApp} from './APIs/ProductAPI.js'
const app=exp();
//add body parser
app.use(exp.json())

app.use("/product-api",productApp)
async function connectDB()
{
    try{
        await connect("mongodb://localhost:27017/anuragdb")
        console.log("db server connected successfully")
        //start server
        app.listen(4000,()=>console.log("server on port 4000"))
    }catch (err)
    {
        console.log("err in DB connection :",err);
    }
}
connectDB();

//error handling middleware
//error object properties...error=>{name,messagae,callstack}
// //basic version
// app.use((err,req,res,next)=>
// {
//     res.json({message:"error occured",error:err.message})
// }
// )

//modified error handling
app.use((err,req,res,next)=>
{
    console.log(err.name)
    console.log(err.code)
    //validation error
    if(err.name==='ValidationError')
    {
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //cast error
    if(err.name==='CastError')
    {
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //send server side error
    res.status(500).json({message:"Error occured",error:"Server side Error"})
}
);