import React from "react";

const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
  return (
    <div
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
      onClick={() => console.log(`Redirect to details of home with ID: ${id}`)}
    >
      <div className="mb-3">
        <p className="text-xl font-semibold text-black">{hometype}</p>
        <p className="text-gray-600">{location}</p>
      </div>
      <div className="mb-3 text-sm text-gray-700">
        <p>Bedrooms: {bedrooms}</p>
        <p>Beds: {beds}</p>
        <p>Bathrooms: {bathrooms}</p>
      </div>
      <div className="text-lg font-bold text-primary">₹{price}</div>
    </div>
  );
};

export default Card;
