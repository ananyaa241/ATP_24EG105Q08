import {Schema,model,Types} from 'mongoose'

//create User Schema(username,password,email,age)//these are the chosen fields..we can use more if needed
//new is used to create obj of a class ...therefore it is an operator

//create Cart Schema{ product,count}//fields of cart
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of product model
    },
    count:{
        type:Number,
        default:1
    }
});
const userSchema=new Schema({
    //structure of user resource
    username:{
        //string -0 js datatype
        //String -mongoose Schema type
        type:String,
        required:[true,"user name is required"],//true,message when user sends empty string
        minLength:[4,"Min length of Username is 4 characters"],
        maxLength:[6,"Username size exceeded 6 chars"]
    },//mongodb accepts this data when these conditions are fulfilled
    password:{
        type:String,
        required:[true,"Password Required"]
    },
    email:{
        type:String,
        required:[true,"Emil required"],
        unique:[true,"Email already exists"]
    },
    age:{
        type:Number,
        required:[true]
    },
    cart:[cartSchema]//accept elements only that match with cart schema..or cartSchema obj type ...cart schema is object with 2 properties..count and product
    //empty cart:[] will accept any type of obj},
},
{
        versionKey:false,
        timestamps:true,
}


);
//Generate UserModel
export const UserModel=model("user",userSchema)
