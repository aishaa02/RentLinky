import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import database from "./database/db.js"
//import {errorMiddleware} from "./middlewares/error.js";
import AuthRouter from "./router/AuthRouter.js"; 

const app=express();

const result = dotenv.config({ path: "./.env" });


app.use(cookieParser())
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello!")
})

app.post("/registration",AuthRouter)
app.post("/login",AuthRouter)



// app.use(errorMiddleware)
database().then(()=>{
    console.log("DB connected")
    app.listen(3000,()=>{
        console.log(`server running at port 3000`);
    })
   
}).catch(()=>{
    console.log("Db connection failed")
})