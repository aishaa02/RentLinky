// import express from "express"
// import isAuth from "../middlewares/auth.js";
// import { House } from "../models/landLord.js";
// const homeRouter=express.Router();

// homeRouter.post("/addHouse", isAuth, async (req,res)=>{
//     const {homeId,role}=req.user;


//     if(role==="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//     const {hometype,location,bedrooms,beds,bathrooms,amenities,expired,price}=req.body;

//     const newHouse=new House({
//         homeId,hometype,location,bedrooms,beds,bathrooms,amenities,expired,price
//     })

//     await newHouse.save();

//     res.status(200).json({
//         message:"New house added"
//     })
// })

// homeRouter.put("/updateHouse/:id", isAuth, async (req,res)=>{
//   const {landlord_id, role}=req.user;

//   if(role=="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//   const {id}=req.params;

//   const updatedHouse=await House.findByIdAndUpdate(id,req.body,{
//     new:true,
//     runValidator:true,
//     useFindAndModified:false
//   })

//   res.json({
//     message:"home updated",
//     updatedHouse
//   })

  

   
// })

// homeRouter.post("/deleteHouse/:id", isAuth, async (req,res)=>{
//   const {id}=req.params;
//   const {role}=req.user;

//   if(role=="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//   const job=await House.findById(id);

//   if(!job)
//   {
//     return res.json({
//       message:"ooops job not found"
//     })
//   }

//   await job.deleteOne();

//   res.status(200).json({
//     message:"Job deleted sucessfully"
//   })
// })

// export default homeRouter;


import express from "express";
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";

const homeRouter = express.Router();

// Add House
homeRouter.post("/addHouse", isAuth, async (req, res) => {
  const { _id: homeId, role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({
      message: "Tenant cannot have access to add the house",
    });
  }

  const {
    hometype,
    location,
    bedrooms,
    beds,
    bathrooms,
    amenities,
    expired,
    price,
    title,
    description,
  } = req.body;

  // Create a new house
  const newHouse = new House({
    homeId,
    hometype,
    location,
    bedrooms,
    beds,
    bathrooms,
    amenities,
    expired,
    price,
    title,
    description,
  });

  try {
    await newHouse.save();

    res.status(200).json({
      message: "New house added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while adding house",
      error: error.message,
    });
  }
});

// Update House
homeRouter.put("/updateHouse/:id", isAuth, async (req, res) => {
  const { role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({
      message: "Tenant cannot have access to update the house",
    });
  }

  const { id } = req.params;

  try {
    const updatedHouse = await House.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedHouse) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    res.status(200).json({
      message: "House updated successfully",
      updatedHouse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while updating house",
      error: error.message,
    });
  }
});

// Delete House
homeRouter.delete("/deleteHouse/:id", isAuth, async (req, res) => {
  const { role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({
      message: "Tenant cannot have access to delete the house",
    });
  }

  const { id } = req.params;

  try {
    const house = await House.findById(id);

    if (!house) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    await house.deleteOne();

    res.status(200).json({
      message: "House deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while deleting house",
      error: error.message,
    });
  }
});

export default homeRouter;
