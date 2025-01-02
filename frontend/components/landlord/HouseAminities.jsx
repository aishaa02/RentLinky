import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '..//../main.jsx';
import wifi from "./assets/wifi.png"
import electric from "./assets/electric-heater.png"
import parking from "./assets/parking-area.png"
import bill from "./assets/bill.png"
import others from "./assets/application.png"

const HouseAmenities = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [selectedAmenities, setSelectedAmenities] = useState(
    hostDetails.amenities || []
  );
  const navigate = useNavigate();

  const amenitiesOptions = [
    { name: 'Wifi', img: wifi },
    { name: 'Warm water', img: electric },
    { name: 'Electricity bill', img: bill },
    { name: 'Parking', img: parking },
    { name: 'Others', img: others },
  ];

  const handleSelect = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleNext = () => {
    if (selectedAmenities.length === 0) {
      alert('Please select at least one amenity');
      return;
    }

    // Update the amenities in the context
    setHostDetails((prev) => ({ ...prev, amenities: selectedAmenities }));

    // Navigate to the next step
    navigate('/landlord/Housedis');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#ededed]">
      <h1 className="text-3xl font-semibold mb-6">Select Amenities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {amenitiesOptions.map(({ name, img }) => (
          <div
            key={name}
            className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              selectedAmenities.includes(name)
                ? 'border-4 border-green-500 scale-105'
                : 'hover:scale-105'
            }`}
            onClick={() => handleSelect(name)}
          >
            <img src={img} alt={name} className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-center text-lg">{name}</p>
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

export default HouseAmenities;
