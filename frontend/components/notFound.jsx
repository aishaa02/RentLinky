import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import image from "../components/landlord/assets/image.png"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ededed]">
      <h1 className="text-3xl font-semibold mb-4">Oops!</h1>
      
      {/* Image */}
      <img
        src={image}// Replace with your image path
        alt="Not Found"
        className="w-1/2 h-auto mb-6"
      />

      {/* Link to Homepage */}
      <Link to="/" className="text-lg text-[#222] font-semibold hover:text-black">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
