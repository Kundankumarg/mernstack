import mongoose from "mongoose";

const db = async () => {
    
  try 
  {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } 
  catch (err) 
  {
    console.log("Mongo Error:", err.message);
  }

};

export default db;
