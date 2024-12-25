import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../main.jsx';

const HouseBathrooms = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [selectedBathroomTypes, setSelectedBathroomTypes] = useState(
    Array.isArray(hostDetails.bathrooms) ? hostDetails.bathrooms : []
  );
  const navigate = useNavigate();

  const bathroomOptions = [
    'Private & Unattached',
    'Private with shared some peoples',
    'Shared or common',
  ];

  const handleSelect = (type) => {
    if (selectedBathroomTypes.includes(type)) {
      setSelectedBathroomTypes(selectedBathroomTypes.filter((item) => item !== type));
    } else {
      setSelectedBathroomTypes([...selectedBathroomTypes, type]);
    }
  };

  const handleNext = () => {
    if (selectedBathroomTypes.length === 0) {
      alert('Please select at least one type of bathroom');
      return;
    }

    // Update the bathrooms in the context
    setHostDetails((prev) => ({ ...prev, bathrooms: selectedBathroomTypes }));

    // Navigate to the next step
    navigate('/landlord/Aminities');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Select Bathroom Types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bathroomOptions.map((type) => (
          <div
            key={type}
            className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              selectedBathroomTypes.includes(type)
                ? 'border-4 border-green-500 scale-105'
                : 'hover:scale-105'
            }`}
            onClick={() => handleSelect(type)}
          >
            <p className="text-center text-lg">{type}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default HouseBathrooms;
