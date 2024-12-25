import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '..//../main.jsx';

const HouseDescription = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const navigate = useNavigate();

  const [bedrooms, setBedrooms] = useState(hostDetails.bedrooms || 0);
  const [beds, setBeds] = useState(hostDetails.beds || 0);
  const [bathrooms, setBathrooms] = useState(hostDetails.bathrooms || 0);

  const updateContext = () => {
    setHostDetails((prev) => ({
      ...prev,
      bedrooms,
      beds,
      bathrooms,
    }));
    navigate('/landlord/Bathrooms'); // Navigate to the next step
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Select Rooms and Beds</h1>
      <div className="space-y-6">
        {/* Bedrooms */}
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-medium">Bedrooms:</h2>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBedrooms((prev) => Math.max(0, prev - 1))}
          >
            -
          </button>
          <span className="text-2xl font-semibold">{bedrooms}</span>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBedrooms((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        {/* Beds */}
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-medium">Beds:</h2>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBeds((prev) => Math.max(0, prev - 1))}
          >
            -
          </button>
          <span className="text-2xl font-semibold">{beds}</span>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBeds((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        {/* Bathrooms */}
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-medium">Bathrooms:</h2>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBathrooms((prev) => Math.max(0, prev - 1))}
          >
            -
          </button>
          <span className="text-2xl font-semibold">{bathrooms}</span>
          <button
            className="px-4 py-2 bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
            onClick={() => setBathrooms((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={updateContext}
      >
        Next
      </button>
    </div>
  );
};

export default HouseDescription;
