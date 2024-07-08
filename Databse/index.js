import mongoose from "mongoose";
const db_connect=async() => {
    try{
        await mongoose.connect("mongodb+srv://2021cs445:mern@cluster0.5ciofni.mongodb.net/coin_saga?appName=Cluster0");
        console.log("Database connected");
    }
    catch(err){
        console.log("Eror in Database Connection",err);
    }
}

export default db_connect;