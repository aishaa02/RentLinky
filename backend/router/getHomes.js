import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";

const getHouseRouter=express.Router();

getHouseRouter.get("/getHouses",isAuth, async (req,res)=>{
    
    const houses=await House.find({expired:false,location:"Belagavi"})

    res.send(houses)

})

export default getHouseRouter;