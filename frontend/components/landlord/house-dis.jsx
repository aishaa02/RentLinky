import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../main.jsx";

const Housedis = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [description, setDescription] = useState(hostDetails.description || "");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!description.trim()) {
      alert("Please enter a valid description for the house");
      return;
    }

    // Update the description in the context
    setHostDetails((prev) => ({ ...prev, description }));

    // Navigate to the next step (for example: house price page)
    navigate("/landlord/HouseTitle");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Describe Your House</h1>
      <div className="flex flex-col items-center">
        <textarea
          placeholder="Enter a detailed description of the house"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="6"
        />
        <button
          className={`px-6 py-3 text-white text-lg rounded-lg focus:outline-none ${
            description.trim() ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!description.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Housedis;
