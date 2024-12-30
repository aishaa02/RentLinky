// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { context } from "../../main.jsx";

// const HouseImages = () => {
//   const { hostDetails, setHostDetails } = useContext(context);
//   const [coverImage, setCoverImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCoverImage(file);
//       setPreview(URL.createObjectURL(file)); // Preview the image
//     }
//   };

//   const handleNext = () => {
//     if (!coverImage) {
//       alert("Please upload a cover image for your house.");
//       return;
//     }

//     // Update the coverImage in the context
//     setHostDetails((prev) => ({ ...prev, coverImage }));

//     // Navigate to the next step
//     navigate("/landlord/PublishHouse");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#ededed]">
//       <h1 className="text-3xl font-semibold mb-6">Upload a Cover Image for Your House</h1>
//       <div className="flex flex-col items-center">
//         {preview && <img src={preview} alt="Preview" className="w-64 h-64 mb-4 rounded-lg" />}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="mb-4"
//         />
//         <button
//           className={`px-6 py-3 text-white text-lg rounded-lg focus:outline-none ${
//             coverImage ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
//           }`}
//           onClick={handleNext}
//           disabled={!coverImage}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HouseImages;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../main.jsx";

const HouseImages = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [coverImage, setCoverImage] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setPreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleNext = () => {
    if (!coverImage) {
      alert("Please upload a cover image for your house.");
      return;
    }

    // Update the coverImage in the context
    setHostDetails((prev) => ({ ...prev, coverImage }));

    // Navigate to the next step
    navigate("/landlord/PublishHouse");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#ededed]">
      <h1 className="text-3xl font-semibold mb-6">Upload a Cover Image for Your House</h1>
      <div className="flex flex-col items-center">
        {preview && <img src={preview} alt="Preview" className="w-64 h-64 mb-4 rounded-lg" />}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        <button
          className={`px-6 py-3 text-white text-lg rounded-lg focus:outline-none ${
            coverImage ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!coverImage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HouseImages;
