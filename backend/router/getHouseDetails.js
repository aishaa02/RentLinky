import express from "express";
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";

const detailsHouserouter = express.Router();

detailsHouserouter.get("/tenent/displayHouse/:id", isAuth, async (req, res) => {
  const { id } = req.params; // Destructure to get the id from req.params

  try {
    const house = await House.findById(id); // Use findById for a single document search
    if (!house) {
      return res.status(404).send({ message: "House not found" });
    }
    res.json(house); // Return the house details
  } catch (error) {
    console.error('Error fetching house data:', error);
    res.status(500).send({ message: "Server error" });
  }
});

export default detailsHouserouter;
