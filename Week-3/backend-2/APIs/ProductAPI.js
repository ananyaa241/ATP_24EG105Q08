import exp from "express";
import { ProductModel } from '../models1/ProductModel.js';
export const productApp=exp.Router()

    //read all products
    productApp.get("/products",async(req,res)=>{
            //read all products from the db
    
    let productList=await ProductModel.find();
    //send res
    res.status(200).json({message:"all products details",payload:productList});
    
      });

    productApp.get("/products/:productid",async(req,res)=>{
        const pid=Number(req.params.productid)//find product by id
        const productObj=await ProductModel.findOne({productid:pid});
        //if product is not found
        if(!productObj)
        {
            return res.status(404).json({message:"Product not available"})
        }//return is helpful because if condition is true then it return the response and returns from the whole route and no further response is sent
        //send res
        res.status(200).json({message:"products",payload:productObj})
    });
    
     productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body;
    //create new product document
    const newProductDocument=new ProductModel(newProduct);
    //save equiva to insert new
    const result=await newProductDocument.save();
    console.log("result: ",result)
    //send response
    res.status(201).json({message:"Product Saved"});

    }
    );
    productApp.put("/products/:productid",async(req,res)=>
    {
        const modifiedPro=req.body;
        const pid=Number(req.params.productid);
        //find product by id
        const updatedPro=await ProductModel.findOneAndUpdate({productid:pid},{$set:{...modifiedPro}},{new:true,runValidators:true})
        //send res
        res.status(200).json({message:"updated product details",payload:updatedPro})
    });
     productApp.delete("/products/:productid",async(req,res)=>
    {
        const psid=Number(req.params.productid);
        const deletedPro=await ProductModel.findOneAndDelete({productid:psid})
         if(!deletedPro)
        {
            return res.status(404).json({message:"Product Sold out"})
        }
        //res
         res.status(200).json({message:"Product out of stock",payload:deletedPro})
    })