import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../main.jsx';

const HousePrice = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [price, setPrice] = useState(hostDetails.price || '');
  const navigate = useNavigate();

  const handleNext = () => {
    if (!price || price <= 0) {
      alert('Please enter a valid price greater than 0');
      return;
    }

    // Update the price in the context
    setHostDetails((prev) => ({ ...prev, price }));

    // Navigate to the next step
    navigate('/landlord/PublishHouse'); // Update with the actual next step route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#ededed]">
      <h1 className="text-3xl font-semibold mb-6">Set the Price of Your House</h1>
      <div className="flex flex-col items-center">
        <input
          type="number"
          placeholder="Enter price in $"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="p-2 border rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          className={`px-6 py-3 text-white text-lg rounded-lg focus:outline-none ${
            price > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!price || price <= 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HousePrice;
