import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../main.jsx';

const HouseTitle = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [title, setTitle] = useState(hostDetails.title || '');
  const navigate = useNavigate();

  const handleNext = () => {
    if (!title.trim()) {
      alert('Please enter a valid title for the house');
      return;
    }

    // Update the title in the context
    setHostDetails((prev) => ({ ...prev, title }));

    // Navigate to the next step
    navigate('/landlord/HousePrice');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Set a Title for Your House</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter house title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          className={`px-6 py-3 text-white text-lg rounded-lg focus:outline-none ${
            title.trim() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!title.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HouseTitle;
