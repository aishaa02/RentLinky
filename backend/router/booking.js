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
      houseId:id,
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

bookingRouter.post("/manageBooking/:houseId", isAuth, async (req, res) => {
  const { houseId } = req.params; // House ID from URL
  const { bookingId } = req.body; // Booking ID for the tenant to accept

  try {
    // Fetch all bookings for the given house
    const bookings = await Booking.find({ houseId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for the specified house." });
    }

    // Update the accepted booking
    const acceptedBooking = bookings.find((booking) => booking._id.toString() === bookingId);
    if (!acceptedBooking) {
      return res.status(404).json({ message: "Booking not found for the provided booking ID." });
    }

    acceptedBooking.request = "accepted";
    await acceptedBooking.save();

    // Update all other bookings for the same house as "rejected"
    const otherBookings = bookings.filter((booking) => booking._id.toString() !== bookingId);
    for (const booking of otherBookings) {
      booking.request = "rejected";
      await booking.save();
    }

    res.status(200).json({
      success: true,
      message: "Booking accepted, and other requests rejected.",
      acceptedBooking,
      rejectedBookings: otherBookings,
    });
  } catch (error) {
    console.error("Error managing bookings:", error);
    res.status(500).json({ message: "An error occurred while managing bookings. Please try again." });
  }
});

bookingRouter.post('/updatePayment',isAuth,  async (req, res) => {
  const { bookingId } = req.body;

  try {
    // Update booking in the database
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { paymentStatus: 'completed' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Payment status updated', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment status', error });
  }
});


export default bookingRouter;
