// // import React, { useContext, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { context } from "..//../main.jsx";

// // const Host = () => {
// //   const { hostDetails, setHostDetails } = useContext(context);
// //   const [selectedHouseType, setSelectedHouseType] = useState(hostDetails.houseType || '');
// //   const navigate = useNavigate();

// //   const handleSelect = (type) => {
// //     setSelectedHouseType(type);
// //   };

// //   const handleNext = () => {
// //     if (!selectedHouseType) {
// //       alert('Please select a house type');
// //       return;
// //     }

// //     setHostDetails((prev) => ({ ...prev, houseType: selectedHouseType }));
// //     navigate('/landlord/HouseLocation');
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
// //       <h1 className="text-3xl font-semibold mb-6">Select Type of House</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         <div
// //           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
// //             selectedHouseType === 'House' ? 'border-4 border-green-500 scale-105' : 'hover:scale-105'
// //           }`}
// //           onClick={() => handleSelect('House')}
// //         >
// //           <img src="house-image.jpg" alt="House" className="w-full h-40 object-cover rounded-lg mb-4" />
// //           <p className="text-center text-lg">House</p>
// //         </div>
// //         <div
// //           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
// //             selectedHouseType === 'Flat' ? 'border-4 border-green-500 scale-105' : 'hover:scale-105'
// //           }`}
// //           onClick={() => handleSelect('Flat')}
// //         >
// //           <img src="flat-image.jpg" alt="Flat" className="w-full h-40 object-cover rounded-lg mb-4" />
// //           <p className="text-center text-lg">Flat</p>
// //         </div>
// //         <div
// //           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
// //             selectedHouseType === 'Apartment' ? 'border-4 border-green-500 scale-105' : 'hover:scale-105'
// //           }`}
// //           onClick={() => handleSelect('Apartment')}
// //         >
// //           <img src="apartment-image.jpg" alt="Apartment" className="w-full h-40 object-cover rounded-lg mb-4" />
// //           <p className="text-center text-lg">Apartment</p>
// //         </div>
// //       </div>
// //       <button
// //         className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
// //         onClick={handleNext}
// //       >
// //         Next
// //       </button>
// //     </div>
// //   );
// // };

// // export default Host;


// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { context } from "..//../main.jsx";

// const Host = () => {
//   const { hostDetails, setHostDetails } = useContext(context);
//   const [selectedHouseType, setSelectedHouseType] = useState(hostDetails.houseType || '');
//   const navigate = useNavigate();

//   const handleSelect = (type) => {
//     setSelectedHouseType(type);
//   };

//   const handleNext = () => {
//     if (!selectedHouseType) {
//       alert('Please select a house type');
//       return;
//     }

//     setHostDetails((prev) => ({ ...prev, houseType: selectedHouseType }));
//     navigate('/landlord/HouseLocation');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#ededed]">
//       <h1 className="text-3xl font-semibold mb-6 text-[#222]">Select Type of House</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         <div
//           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
//             selectedHouseType === 'House' ? 'border-4 border-[#222] scale-105' : 'hover:scale-105'
//           }`}
//           onClick={() => handleSelect('House')}
//         >
//           <img
//             src="house-image.jpg"
//             alt="House"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <p className="text-center text-lg text-[#222]">House</p>
//         </div>
//         <div
//           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
//             selectedHouseType === 'Flat' ? 'border-4 border-[#222] scale-105' : 'hover:scale-105'
//           }`}
//           onClick={() => handleSelect('Flat')}
//         >
//           <img
//             src="flat-image.jpg"
//             alt="Flat"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <p className="text-center text-lg text-[#222]">Flat</p>
//         </div>
//         <div
//           className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
//             selectedHouseType === 'Apartment' ? 'border-4 border-[#222] scale-105' : 'hover:scale-105'
//           }`}
//           onClick={() => handleSelect('Apartment')}
//         >
//           <img
//             src="apartment-image.jpg"
//             alt="Apartment"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <p className="text-center text-lg text-[#222]">Apartment</p>
//         </div>
//       </div>
//       <button
//         className="mt-8 px-6 py-3 bg-[#222] text-white text-lg rounded-lg hover:bg-[#222] focus:outline-none"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Host;


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from "../../main.jsx";

const Host = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [selectedHouseType, setSelectedHouseType] = useState(hostDetails.houseType || '');
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setSelectedHouseType(type);
  };

  const handleNext = () => {
    if (!selectedHouseType) {
      alert('Please select a house type');
      return;
    }

    setHostDetails((prev) => ({ ...prev, houseType: selectedHouseType }));
    navigate('/landlord/HouseLocation');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ededed]">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-8 text-[#222]">Select Type of House</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {/* House Option */}
          <div
            className={`cursor-pointer p-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              selectedHouseType === 'House' ? 'border-4 border-[#222] scale-110' : 'hover:scale-105'
            }`}
            onClick={() => handleSelect('House')}
          >
            <div className="w-32 h-32 flex justify-center items-center bg-gray-100 rounded-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                fill="black"
              >
                <path d="M12 2.69L2 9v11a2 2 0 002 2h16a2 2 0 002-2V9l-10-6.31zM14 20h-4v-4h4v4zm4 0h-2v-6H8v6H6V9.53l6-3.78 6 3.78V20z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-[#222]">House</p>
          </div>

          {/* Apartment Option */}
          <div
            className={`cursor-pointer p-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              selectedHouseType === 'Apartment' ? 'border-4 border-[#222] scale-110' : 'hover:scale-105'
            }`}
            onClick={() => handleSelect('Apartment')}
          >
            <div className="w-32 h-32 flex justify-center items-center bg-gray-100 rounded-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                fill="black"
              >
                <path d="M3 2H21a1 1 0 011 1V21a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm2 2v16h14V4H5zm4 2h6v2H9V6zm0 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm4-8h2v12h-2V6zm-8 4h2v2H9v-2zm-4-6h2v16H5V4z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-[#222]">Apartment</p>
          </div>
        </div>
        <button
          className="mt-8 px-8 py-3 bg-[#222] text-white text-lg rounded-lg hover:bg-[#222] focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Host;
