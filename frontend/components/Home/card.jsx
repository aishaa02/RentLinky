import React from "react";

const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#118B50]">{hometype}</h3>
      <p className="text-gray-700">Location: {location}</p>
      <p className="text-gray-700">Bedrooms: {bedrooms}</p>
      <p className="text-gray-700">Beds: {beds}</p>
      <p className="text-gray-700">Bathrooms: {bathrooms}</p>
      <p className="text-black font-bold">Price: {typeof price === "number" ? `₹${price}/month` : price}</p>
    </div>
  );
};

export default Card;
