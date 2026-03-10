import {Schema,model} from 'mongoose'

//create User Schema(username,password,email,age)//these are the chosen fields..we can use more if needed
//new is used to create obj of a class ...therefore it is an operator
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
    
    },
    {
        versionKey:false,
        timestamps:true,
    }

);
//Generate UserModel
export const UserModel=model("user",userSchema)
