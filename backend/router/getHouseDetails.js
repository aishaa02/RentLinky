import express from "express";
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";
import Booking from "../models/Booking.js";

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


detailsHouserouter.get('/houseDetails/:houseId', isAuth, async (req, res) => {
  const { houseId } = req.params;

  try {
    // Fetch house details
    const house = await House.findById({_id:houseId});
    console.log(house);
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }

    // Fetch bookings for the house and populate tenant details
    const bookings = await Booking.find({ houseId })
      .populate('tenantId', 'name email contactNumber') // Include tenant details
      .populate('landlordId', 'name email'); // Optional: Include landlord details

    res.status(200).json({
      success: true,
      house,
      bookings,
    });
  } catch (error) {
    console.error('Error fetching house details:', error);
    res.status(500).json({ success: false, message: 'Error fetching house details' });
  }
});


export default detailsHouserouter;
