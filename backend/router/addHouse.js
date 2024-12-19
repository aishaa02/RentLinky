import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";
const homeRouter=express.Router();

homeRouter.post("/addHouse", isAuth, async (req,res)=>{
    const {homeId,role}=req.user;


    if(role==="Tenent")
    {
      return res.status(400).json({
        message:"Tenent cannot have access to add the house"
      })
    }

    const {hometype,location,bedrooms,beds,bathrooms,amenities,expired,price}=req.body;

    const newHouse=new House({
        homeId,hometype,location,bedrooms,beds,bathrooms,amenities,expired,price
    })

    await newHouse.save();

    res.status(200).json({
        message:"New house added"
    })
})

homeRouter.put("/updateHouse/:id", isAuth, async (req,res)=>{
  const {landlord_id, role}=req.user;

  if(role=="Tenent")
    {
      return res.status(400).json({
        message:"Tenent cannot have access to add the house"
      })
    }

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

homeRouter.post("/deleteHouse/:id", isAuth, async (req,res)=>{
  const {id}=req.params;
  const {role}=req.user;

  if(role=="Tenent")
    {
      return res.status(400).json({
        message:"Tenent cannot have access to add the house"
      })
    }

  const job=await House.findById(id);

  if(!job)
  {
    return res.json({
      message:"ooops job not found"
    })
  }

  await job.deleteOne();

  res.status(200).json({
    message:"Job deleted sucessfully"
  })
})

export default homeRouter;

