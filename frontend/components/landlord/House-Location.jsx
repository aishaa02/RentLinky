import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from "..//../main.jsx"; // Import the shared context


const HouseLocation = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [location, setLocation] = useState(hostDetails.location || '');
  const navigate = useNavigate();

  const handleNext = () => {
    if (!location.trim()) {
      alert('Please enter a location');
      return;
    }

    // Update the location in the context
    setHostDetails((prev) => ({ ...prev, location }));

    // Navigate to the next step
    navigate('/landlord/Description'); // Next page route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#ededed]">
      <h1 className="text-3xl font-semibold mb-6">Enter Location</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="w-full max-w-md p-3 border rounded-lg mb-4"
      />
      <button
        className="mt-4 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default HouseLocation;
