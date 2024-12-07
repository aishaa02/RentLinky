import express from "express"
import  {User}  from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const AuthRouter=express.Router();

AuthRouter.post("/registration",async (req,res)=>{
    try{
      const pass =req.body.password;
      const passwordhash= await bcrypt.hash(pass,10)

      const {name,email,password,role}=req.body;
     
      

      const user=new User({
        name,
        email,
        password:passwordhash,
        role
      })


      await user.save();
  
      res.status(200).send("USer reistered successfully");
    }
    catch(err){
        res.send(err)
    }

})

AuthRouter.post("/login", async  (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email:email})

    if(!user)
    {
      return res.status(400).send("invalid email or password")
    }

    const isPasswordMatched= await bcrypt.compare(password,user.password)

    if(!isPasswordMatched)
    {
       return res.status(400).send("invalid email or password")
    }

    const token=jwt.sign({_id:user._id},"RENTLINL2110");

    res.cookie("token",token);
    res.status(200).send("user loged in successfully")


})

export default AuthRouter;