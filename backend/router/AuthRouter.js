import express from "express"
import  {User}  from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import isAuth from "../middlewares/auth.js";

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

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
      return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || "RENTLINK2110");

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: 'lax', // Adjust based on frontend and backend setup
    secure: false, // Set to true if using HTTPS
});

  res.status(200).json({
      message: "User logged in successfully",
      user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
      },
      token,
  });
});


AuthRouter.post("/logout", async (req, res) => {
  res.cookie("RENTLINL2110", "", {
    httpOnly: true,    
    expires: new Date(0),
  
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});


export default AuthRouter;