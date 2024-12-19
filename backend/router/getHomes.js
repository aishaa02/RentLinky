import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";

const getHouseRouter=express.Router();

getHouseRouter.get("/getHouses",isAuth, async (req,res)=>{
    
    const houses=await House.find({expired:false})

    res.send(houses)

})




// GET /filterHouse - Filter Houses
getHouseRouter.post("/filterHouse", isAuth, async (req, res) => {
    try {
        // Extract filter values from the request body
        const { location, bedrooms, bathrooms } = req.body;

        // Build a dynamic filter object
        let filter = {};

        if (location && location.trim()) {
            filter.location = { $regex: location.trim(), $options: "i" }; // Case-insensitive location match
        }
        if (bedrooms && !isNaN(bedrooms)) {
            filter.bedrooms = parseInt(bedrooms); // Exact match for bedrooms
        }
        if (bathrooms && bathrooms.trim()) {
            filter.bathrooms = { $regex: bathrooms.trim(), $options: "i" }; // Case-insensitive bathroom match
        }

        // If no filters are provided
        if (Object.keys(filter).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No filter parameters provided",
            });
        }

        // Query the database with the constructed filter
        const houses = await House.find(filter);

        // If no results are found
        if (!houses || houses.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No results found",
            });
        }

        // Return filtered results
        res.status(200).json({
            success: true,
            count: houses.length,
            data: houses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
});




export default getHouseRouter;