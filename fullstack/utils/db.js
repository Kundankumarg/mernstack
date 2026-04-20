import mongoose from "mongoose";

const db = async () => {
    
  try 
  {
    console.log("Connected to MongoDB");
  } 
  catch (err) 
  {
    console.log("Mongo Error:", err.message);
  }

};

export default db;
