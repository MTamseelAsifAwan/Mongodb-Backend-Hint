import mongoose from "mongoose";
const userschema=mongoose.Schema({
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true},
    
    email:{
        type:String,
        required:true
    }

},
    {timestamps:true});
    export const User=mongoose.model("User",userschema);