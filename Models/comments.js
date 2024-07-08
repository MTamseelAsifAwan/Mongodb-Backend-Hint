import mongoose from "mongoose";
const commnetsceheme=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
    {timestamps:true});
    export const Comment=mongoose.model("Comment",commnetsceheme);