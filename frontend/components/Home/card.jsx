// // import React from "react";

// // const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
// //   return (
// //     <div className="border border-gray-300 p-4 rounded-lg shadow-md">
// //       <h3 className="text-xl font-semibold text-[#118B50]">{hometype}</h3>
// //       <p className="text-gray-700">Location: {location}</p>
// //       <p className="text-gray-700">Bedrooms: {bedrooms}</p>
// //       <p className="text-gray-700">Beds: {beds}</p>
// //       <p className="text-gray-700">Bathrooms: {bathrooms}</p>
// //       <p className="text-black font-bold">Price: {typeof price === "number" ? `₹${price}/month` : price}</p>
// //     </div>
// //   );
// // };

// // export default Card;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to the details page for the clicked house
//     navigate(`/tenent/displayHouse/${id}`);
//   };

//   return (
//     <div
//       className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer"
//       onClick={handleClick}
//     >
//       <h3 className="text-xl font-semibold text-[#118B50]">{hometype}</h3>
//       <p className="text-gray-700">Location: {location}</p>
//       <p className="text-gray-700">Bedrooms: {bedrooms}</p>
//       <p className="text-gray-700">Beds: {beds}</p>
//       <p className="text-gray-700">Bathrooms: {bathrooms}</p>
//       <p className="text-black font-bold">Price: ₹{price}/month</p>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price, coverImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tenant/displayHouse/${id}`);
  };

  return (
    <div
      className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer"
      onClick={handleClick}
    >
      {/* Display only the cover image */}
      <img
        src={coverImage}
        alt="Cover"
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold text-[#118B50]">{hometype}</h3>
      <p className="text-gray-700">Location: {location}</p>
      <p className="text-gray-700">Bedrooms: {bedrooms}</p>
      <p className="text-gray-700">Beds: {beds}</p>
      <p className="text-gray-700">Bathrooms: {bathrooms}</p>
      <p className="text-black font-bold">Price: ₹{price}/month</p>
    </div>
  );
};

export default Card;
