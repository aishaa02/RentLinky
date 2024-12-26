import express from "express"
import isAuth from "../middlewares/auth.js"
import { User } from "../models/user.js"

const profileRouter=express.Router()

profileRouter.get("/userProfile", isAuth , async (req,res)=>{
         const user=req.user;
         if(!user)
         {
            return res.status(400).json({
                message:"Not loged in please log in"
            })
         }
          res.send(user);
})


// Update user profile details
profileRouter.put('/profile/update', isAuth,async (req, res) => {
    try {
      const {_id}=req.user
      const {  contactNumber, address } = req.body;
      

      // Find user and update details
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { contactNumber, address },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating profile", error });
    }
  });
  

export default profileRouter;