import express from "express"
import isAuth from "../middlewares/auth.js"

const profileRouter=express.Router()

profileRouter.get("/profile", isAuth , async (req,res)=>{
         const user=req.user;
          res.send(user);
})


export default profileRouter;