import express from "express"
import isAuth from "../middlewares/auth.js"

const profileRouter=express.Router()

profileRouter.get("/profile", isAuth , async (req,res)=>{
         const user=req.user;
         if(!user)
         {
            return res.status(400).json({
                message:"Not loged in please log in"
            })
         }
          res.send(user);
})


export default profileRouter;