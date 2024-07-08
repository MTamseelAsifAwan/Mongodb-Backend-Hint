import mongoose from "mongoose";
const blogschema=mongoose.Schema({

    title:{
type:String,
required:true
    },
    content:{
        type:String,
        required:true
    },
photopath:{
    type:String,
    required:true
},
    author:{ type:String,required:true },

},
    
    {timestamps:true})
    export const Blog=mongoose.model("Blog",blogschema)