import e from "express";
import mongoose from "mongoose";

const connection=async()=>{
    try{
        let connect =process.env.DB_URL;
      let dbname = "BackendExericse";
  
      let connection = await mongoose.connect(`${connect}/${dbname}`);
  
      
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
}
export default connection;