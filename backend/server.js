import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import productRouter from "./routes/product.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


//allow cross-origin resource sharing
app.use(cors())

// parse incoming request that has JSON payload
app.use(express.json())

//used for developmnet purpose 
app.use(morgan('dev'));




//set up API routes
app.use("/user",userRouter)
app.use("/product",productRouter)

const startApp = async()=>{
try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to MONGO db")
  app.listen(PORT,(err)=>{
    if(err){
      console.error("error starting the server :",err)
      return;
    }
    console.log("server started listening on port:",PORT);
  })
}catch(e){
  console.error("error connecting to MongoDB :",e)
}

}

startApp();