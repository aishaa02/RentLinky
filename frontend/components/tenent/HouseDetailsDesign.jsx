import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HouseDetailsDesign = () => {
  const { id } = useParams(); // Get the house ID from the URL
  const [house, setHouse] = useState(null);

  useEffect(() => {
    // Fetch house data from your backend using the ID
    const fetchHouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
        setHouse(response.data); // Set the fetched house data
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, [id]);

  if (!house) {
    return <p>Loading...</p>; // Display loading until data is available
  }

  const {
    hometype,
    location,
    bedrooms,
    beds,
    bathrooms,
    price,
    amenities,
    images,
  } = house;

  return (
    <div className="p-8">
      {/* Heading - House Name */}
      <h1 className="text-3xl font-bold text-[#118B50] mb-4">{hometype} in {location}</h1>

      {/* Image Gallery */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Image Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images && images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`House image ${index + 1}`}
              className="w-full h-[200px] object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Property Details</h3>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Bedrooms:</strong> {bedrooms}</p>
        <p><strong>Beds:</strong> {beds}</p>
        <p><strong>Bathrooms:</strong> {bathrooms}</p>
      </div>

      {/* Price Information */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Price</h3>
        <p className="text-lg font-bold text-black">₹{price}/month</p>
      </div>

      {/* Amenities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Amenities</h3>
        <ul className="list-disc pl-5">
          {amenities && amenities.map((amenity, index) => (
            <li key={index} className="text-gray-700">{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Rating - Placeholder for now */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rating</h3>
        <p>No rating available for now</p>
      </div>
    </div>
  );
};

export default HouseDetailsDesign;
