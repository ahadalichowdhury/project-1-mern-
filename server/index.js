import cors from "cors";
import express from "express";
import mongoose from "mongoose";



const app = express();




app.use(express.json({
    limit: "30mb", 
    extended: true
}
))
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
  }));
app.use(cors());

const CONNECT_URL = 'mongodb+srv://project1:project1@cluster0.uxz8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECT_URL, 
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
  .then(()=> app.listen(PORT, ()=>{
      console.log(`server running on port ${PORT}`)
  }))
  .catch((error)=> console.log(error.message))

