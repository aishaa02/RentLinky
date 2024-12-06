import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import database from "./database/db.js"

const app=express();

const result = dotenv.config({ path: "./.env" });



app.use(cookieParser())
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello!")
})


database().then(()=>{
    console.log("DB connected")
    app.listen(3000,()=>{
        console.log(`server running at port 3000`);
    })
   
}).catch(()=>{
    console.log("Db connection failed")
})