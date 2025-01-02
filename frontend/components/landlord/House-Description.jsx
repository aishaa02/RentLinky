import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '..//../main.jsx';

const HouseDescription = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const navigate = useNavigate();

  const [bedrooms, setBedrooms] = useState(hostDetails.bedrooms || 0);
  const [beds, setBeds] = useState(hostDetails.beds || 0);

  const updateContext = () => {
    setHostDetails((prev) => ({
      ...prev,
      bedrooms,
      beds,
    }));
    navigate('/landlord/Bathrooms'); // Navigate to the next step
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#ededed]">
      <h1 className="text-4xl font-bold mb-4 text-[#222]">Describe Your Space</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Tell us how many bedrooms and beds your property offers to help tenants understand the space.
      </p>
      <div className="space-y-8 w-full max-w-md">
        {/* Bedrooms */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#222]">Bedrooms</h2>
          <div className="flex items-center space-x-4">
            <button
              className="w-10 h-10 bg-gray-200 text-lg font-bold rounded-full hover:bg-gray-300 focus:outline-none"
              onClick={() => setBedrooms((prev) => Math.max(0, prev - 1))}
            >
              −
            </button>
            <span className="text-2xl font-semibold text-[#222]">{bedrooms}</span>
            <button
              className="w-10 h-10 bg-gray-200 text-lg font-bold rounded-full hover:bg-gray-300 focus:outline-none"
              onClick={() => setBedrooms((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        {/* Beds */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#222]">Beds</h2>
          <div className="flex items-center space-x-4">
            <button
              className="w-10 h-10 bg-gray-200 text-lg font-bold rounded-full hover:bg-gray-300 focus:outline-none"
              onClick={() => setBeds((prev) => Math.max(0, prev - 1))}
            >
              −
            </button>
            <span className="text-2xl font-semibold text-[#222]">{beds}</span>
            <button
              className="w-10 h-10 bg-gray-200 text-lg font-bold rounded-full hover:bg-gray-300 focus:outline-none"
              onClick={() => setBeds((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        className="mt-12 px-8 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition-all"
        onClick={updateContext}
      >
        Next
      </button>
    </div>
  );
};

export default HouseDescription;
