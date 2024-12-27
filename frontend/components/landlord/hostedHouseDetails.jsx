import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HouseDetails = () => {
  const { houseId } = useParams(); // Get houseId from URL
  const [house, setHouse] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/houseDetails/${houseId}`,
          { withCredentials: true }
        );
        setHouse(response.data.house);
        setBookings(response.data.bookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching house details:", error);
        setLoading(false);
      }
    };

    fetchHouseDetails();
  }, [houseId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!house) {
    return <p>House details not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{house.title || "House Details"}</h1>
      <div className="border rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-xl font-semibold">{house.hometype}</h2>
        <p>Location: {house.location}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Beds: {house.beds}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        <p>Amenities: {house.amenities?.join(", ")}</p>
        <p>Price: ₹{house.price}</p>
        <p>Description: {house.description || "No description provided."}</p>
        {house.expired && <p className="text-red-500">Listing expired</p>}
      </div>

      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found for this house.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">Tenant: {booking.tenantId.name}</h3>
              <p>Email: {booking.tenantId.email}</p>
              <p>Contact: {booking.tenantId.contactNumber || "N/A"}</p>
              <p>Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
              <p>Duration: {booking.duration} months</p>
              <p>Total Price: ₹{booking.totalPrice}</p>
              <p>Payment Status: {booking.paymentStatus}</p>
              <p>Status: {booking.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
