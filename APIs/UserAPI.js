//create min-express app(Seperate Route)
import exp from "express";
import { UserModel } from '../models1/UserModel.js'
import {hash,compare} from 'bcrypt';//internally compare function hashes the password
import jwt from 'jsonwebtoken';//destructure elsewhere since its default export
import {verifyToken} from '../middlewares/verifyToken.js'
//encoding
const {sign}=jwt 
export const userApp=exp.Router()

//define user rest api route  
//user login
userApp.post('/auth',async(req,res)=>
{
    //get user cred obj from client
    const{email,password}=req.body;
    //verify email
    let user=await UserModel.findOne({email:email})
    //if email not existed
    if(!user)
    {
        return res.status(404).json({message:"Invalid Email"})
    }
    //if if statement fails...ie.user exists then comapare passwords
    let result=await compare(password,user.password)
    //if passwords not matched
    if(result===false)
    {
        return res.status(400).json({message:"Invalid password"})
    }
    //if passwrord are matched
    //create token(jsonwebtoken--jwt --jaat)
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"})//---only "100"->ms...only 100->seconds
   //store token aas httpOnly cookie
   res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",
    secure:false
   });
    //send token in res
    res.status(200).json({message:"login success",payload:user})
})
  //create new user
    userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //HASH THE PASSWORD
    //replace the plain password with hashed password
    const hashedPassword=await hash(newUser.password,10)
     newUser.password = hashedPassword;
    //create new user document
    const newUserDocument=new UserModel(newUser);
    //save equiva to insert new
    const result=await newUserDocument.save();
    console.log("result: ",result)
    //send response
    res.status(201).json({message:"User created"});

    }
    );
//read all users()(protected routes)
userApp.get("/users",verifyToken,async(req,res)=>{
        //read all usrs from the db

let usersList=await UserModel.find();
//send res
res.status(200).json({message:"users",payload:usersList});

  });
// userApp.get("/users/:id",async(req,res)=>{
//     //read onj id from req params
//     const uid=req.params.id//find user by id
//     const userObj=await UserModel.findById(uid)
//     //send res
//     res.status(200).json({message:"users",payload:userObj})
// });

//update a user by id
// userApp.put("/users/:id",async(req,res)=>
// {
//     const modifiedUser=req.body;
//     const uid=req.params.id;
//     //find user by id
//     const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true})
//     //send res
//     res.status(200).json({message:"updated user",payload:updatedUser})
// });
//deleting a user by id
//  userApp.delete("/users/:id",async(req,res)=>
// {
//     const usid=req.params.id;
//     const deletedUser=await UserModel.findByIdAndDelete(usid)
//     //res
//      res.status(200).json({message:"deleted user",payload:deletedUser})
// })
// user created ==="User Created" ->false
//everytime we create an api we need to use status codes otherwise it would be invalid api
//200--success
//201--created
//400--client siide errors--bad request
//401--Unauthorized
//404--not found
//500--server side error repr by 500 series

//refining the commented portion userApp.get to handle the null response and 200 ok response from the api

userApp.get("/users/:id",async(req,res)=>{
    //read onj id from req params
    const uid=req.params.id//find user by id
    const userObj=await UserModel.findById(uid);
    //if user is not found
    if(!userObj)
    {
        return res.status(404).json({message:"User not found"})
    }//return is helpful because if condition is true theen it return the response and returns from the whole route and no further response is sent
    //send res
    res.status(200).json({message:"users",payload:userObj})
});

 userApp.delete("/users/:id",async(req,res)=>
{
    const usid=req.params.id;
    const deletedUser=await UserModel.findByIdAndDelete(usid)
     if(!deletedUser)
    {
        return res.status(404).json({message:"User not found"})
    }
    //res
     res.status(200).json({message:"deleted user",payload:deletedUser})
})
userApp.put("/users/:id",async(req,res)=>
{
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find user by id
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"updated user",payload:updatedUser})
});

//app.use(verifyTOken)---->every req
//userApp.get(path,verifyToken,req-handler)
