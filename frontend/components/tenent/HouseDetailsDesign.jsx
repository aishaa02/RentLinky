// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HouseDetailsDesign = () => {
//   const { id } = useParams(); // Get the house ID from the URL
//   const [house, setHouse] = useState(null);
//   const [error, setError] = useState(null); // For storing errors
//   const navigate = useNavigate(); // Correct usage of useNavigate hook

//   useEffect(() => {
//     // Fetch house data from your backend using the ID
//     const fetchHouseData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
//         setHouse(response.data); // Set the fetched house data
//       } catch (error) {
//         setError("Error fetching house data. Please try again later."); // Handle error
//         console.error('Error fetching house data:', error);
//       }
//     };

//     fetchHouseData();
//   }, [id]);

//   if (error) {
//     return <p>{error}</p>; // Display error message if there was an issue fetching the data
//   }

//   if (!house) {
//     return <p>Loading...</p>; // Display loading until data is available
//   }

//   const {
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     price,
//     amenities,
//     images,
//   } = house;

//   const handleBook = () => {
//     navigate(`/bookHouse/${id}`); // Correct way to navigate to the booking page
//   };

//   return (
//     <div className="p-8">
//       {/* Heading - House Name */}
//       <h1 className="text-3xl font-bold text-[#118B50] mb-4">{hometype} in {location}</h1>

//       {/* Image Gallery */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Image Gallery</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {images && images.slice(0, 5).map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`House image ${index + 1}`}
//               className="w-full h-[200px] object-cover rounded-lg shadow-md"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Property Details */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Property Details</h3>
//         <p><strong>Location:</strong> {location}</p>
//         <p><strong>Bedrooms:</strong> {bedrooms}</p>
//         <p><strong>Beds:</strong> {beds}</p>
//         <p><strong>Bathrooms:</strong> {bathrooms}</p>
//       </div>

//       {/* Price Information */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Price</h3>
//         <p className="text-lg font-bold text-black">₹{price}/month</p>
//       </div>

//       {/* Amenities Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Amenities</h3>
//         <ul className="list-disc pl-5">
//           {amenities && amenities.map((amenity, index) => (
//             <li key={index} className="text-gray-700">{amenity}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Rating - Placeholder for now */}
//       <div className='booking'>
//         <button 
//           onClick={handleBook} 
//           className="bg-[#118B50] text-white px-6 py-3 rounded-md hover:bg-[#37A772]"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HouseDetailsDesign;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HouseDetailsDesign = () => {
  const { id } = useParams(); // Get the house ID from the URL
  const [house, setHouse] = useState(null);
  const [error, setError] = useState(null); // For storing errors
  const navigate = useNavigate(); // Correct usage of useNavigate hook

  useEffect(() => {
    // Fetch house data from your backend using the ID
    const fetchHouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
        setHouse(response.data); // Set the fetched house data
      } catch (error) {
        setError("Error fetching house data. Please try again later."); // Handle error
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; // Display error message if there was an issue fetching the data
  }

  if (!house) {
    return <p className="text-center">Loading...</p>; // Display loading until data is available
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

  const handleBook = () => {
    navigate(`/bookHouse/${id}`); // Correct way to navigate to the booking page
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
      {/* Heading - House Name */}
      <h1 className="text-4xl font-extrabold text-[#118B50] mb-6 text-center">{hometype} in {location}</h1>

      {/* Image Gallery */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#118B50] mb-4">Image Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images && images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`House image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#118B50] mb-4">Property Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Bedrooms:</strong> {bedrooms}</p>
          <p><strong>Beds:</strong> {beds}</p>
          <p><strong>Bathrooms:</strong> {bathrooms}</p>
        </div>
      </div>

      {/* Price Information */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#118B50] mb-4">Price</h3>
        <p className="text-2xl font-bold text-[#222]">₹{price}/month</p>
      </div>

      {/* Amenities Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#118B50] mb-4">Amenities</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          {amenities && amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="text-center">
        <button 
          onClick={handleBook} 
          className="bg-[#118B50] text-white px-8 py-3 rounded-full text-xl hover:bg-[#37A772] transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HouseDetailsDesign;
