import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";
const homeRouter=express.Router();

homeRouter.post("/addHouse", isAuth, async (req,res)=>{
    const id=req.user._id;

    const {hometype,location,bedrooms,beds,bathrooms,amenities,expired}=req.body;

    const newHouse=new House({
        id,hometype,location,bedrooms,beds,bathrooms,amenities,expired
    })

    await newHouse.save();

    res.status(200).json({
        message:"New house added"
    })
})

export default homeRouter;