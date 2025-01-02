import express from "express"
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";


const getHouseRouter = express.Router();

// Get Houses
getHouseRouter.get("/getHouses", isAuth, async (req, res) => {
  try {
    // Fetch all non-expired houses
    const houses = await House.find({ expired: false }).select(
      "hometype location bedrooms beds bathrooms amenities price title description coverImage"
    );

    // Return the houses
    res.status(200).json({
      message: "Houses fetched successfully",
      houses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while fetching houses",
      error: error.message,
    });
  }
});





getHouseRouter.post("/filterHouse", isAuth, async (req, res) => {
    try {
        // Extract filter values from the request body
        const { location, hometype, bedrooms, bathrooms, price } = req.body;

        // Build a dynamic filter object
        let filter = { expired: false };  // Default filter to exclude expired houses

        if (location && location.trim()) {
            filter.location = { $regex: location.trim(), $options: "i" }; // Case-insensitive location match
        }
        if (hometype && hometype.trim()) {
            filter.hometype = hometype.trim(); // Match home type
        }
        if (bedrooms && !isNaN(bedrooms)) {
            filter.bedrooms = parseInt(bedrooms); // Exact match for bedrooms
        }
        if (bathrooms && bathrooms.trim()) {
            filter.bathrooms = { $regex: bathrooms.trim(), $options: "i" }; // Case-insensitive bathroom match
        }
        if (price && !isNaN(price)) {
            filter.price = { $lte: parseInt(price) }; // Max price filter (less than or equal to the provided price)
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




getHouseRouter.get("/landlordHouse", isAuth, async (req,res)=>{

     const user=req.user;

     if(user.role == "Tenant")
     {
        return res.status(400).json({
            message:"Tenant cannot view landlords homes details"
        })
     }

     const landlordHouses=await House.find({homeId:user._id})

     if(!landlordHouses)
     {
        return res.status(200).json({
            message:"No homes founded. Please Hose Houses"
        })
     }
   
     res.status(200).json({
        landlordHouses
     })

})

export default getHouseRouter;