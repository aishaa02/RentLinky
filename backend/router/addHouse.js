import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";
const homeRouter=express.Router();

homeRouter.post("/addHouse", isAuth, async (req,res)=>{
    const homeId=req.user._id;

    const {hometype,location,bedrooms,beds,bathrooms,amenities,expired}=req.body;

    const newHouse=new House({
        homeId,hometype,location,bedrooms,beds,bathrooms,amenities,expired
    })

    await newHouse.save();

    res.status(200).json({
        message:"New house added"
    })
})

homeRouter.put("/updateHouse/:id", isAuth, async (req,res)=>{
  const landlord_id=req.user._id;

  const {id}=req.params;

  const updatedHouse=await House.findByIdAndUpdate(id,req.body,{
    new:true,
    runValidator:true,
    useFindAndModified:false
  })

  res.json({
    message:"home updated",
    updatedHouse
  })

  

   
})

export default homeRouter;

