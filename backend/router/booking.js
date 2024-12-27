import express from "express";
import isAuth from "../middlewares/auth.js";
import Booking from "../models/Booking.js";
import {House} from "../models/landLord.js";

const bookingRouter = express.Router();

bookingRouter.post("/bookHouse/:id", isAuth, async (req, res) => {
  const { _id: tenantId } = req.user; // Get the tenant ID from the authenticated user
  const { id } = req.params; // Get the house ID from the URL
  const houseId=id
  const { bookingDate, duration, paymentStatus } = req.body;

  try {
    // Check if the house exists
    const house = await House.findById(id);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    
    console.log(house)
    // Calculate total price based on the house price and duration
    const price = house.price; // Monthly price of the house
    const totalPrice = price * duration; // Total price for the given duration (in months)

    // Create a new booking with price and totalPrice
    const booking = new Booking({
      tenantId,
      houseId:house._id,
      landlordId: house.homeId, 
      bookingDate,
      duration,
      paymentStatus: paymentStatus || "pending",
      status: "pending",
      price, // Store the base price
      totalPrice, // Store the calculated total price
    });
    
    booking.status = "confirmed";
    await booking.save();

    // Optional: Update house status if required
   
    await house.save();

    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking,
      price,
      totalPrice, // Send price and totalPrice along with booking confirmation
    });
  } catch (error) {
    console.error("Error booking house:", error);
    res.status(500).json({ message: "Error booking house, please try again later" });
  }
});

export default bookingRouter;
