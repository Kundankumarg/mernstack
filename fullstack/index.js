import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // jab frontend and backend diff server ho to cors ka use kartey hai
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js";


dotenv.config();

const app = express()
app.use(
  cors({
      origin:process.env.BASE_URL,
      credentials:true,
      methods: ['GET' , 'POST' , 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization']
})
);

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.port || 4000;

app.get('/', (req, res) => {
  res.send('cohort')
})


app.get('/hitesh', (req, res) => {
  res.send('hitesh')
})

// connect to db
db();

// user routes
app.use("/api/v1/users",userRoutes)



app.listen(process.env.port, () => {
  console.log(`App listening on port ${port}`)
})
