import {Schema,model} from 'mongoose'
const productSchema=new Schema({
    productid:{
        type:Number,
        required:[true,"product id is mandatory"],
    },
    productname:{
        type:String,
        required:[true,"Product name Required"]
    },
    price:{
        type:Number,
        required:[true,"Price Details required"],
        min:[10000,"Min price is rs.10000"],
        max:[50000,"Max price is rs.50000"]
    },
    brand:{
        type:String,
        required:[true,"Product brand should be mentioned"]
    },
    
    },
    {
        versionKey:false,
        timestamps:true,
    }

);
//Generate UserModel
export const ProductModel=model("product",productSchema)
