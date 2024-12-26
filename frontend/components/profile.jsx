// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [contactNumber, setContactNumber] = useState(""); // For contact number
//   const [address, setAddress] = useState(""); // For address

//   // Load user details when the component mounts
//   useEffect(() => {
//     // Load existing data (assuming you fetch the user data from the backend or context)
//     // If the user details are available globally, you can fetch them from context here
//     // For now, just assume the user data is available in local storage, cookies, or via a fetch.
//     // Example:
//     // setContactNumber(user.contactNumber || "");
//     // setAddress(user.address || "");
//   }, []);

//   // Handle form submission
//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         "http://localhost:3000/profile/update", // Backend API endpoint
//         { contactNumber, address }, // Data to update
//         { withCredentials: true } // Include cookies for authentication
//       );

//       console.log(response);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Profile</h1>
//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         {/* Contact Number */}
//         <div>
//           <label className="block mb-2 font-semibold">Contact Number</label>
//           <input
//             type="text"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             className="border rounded p-2 w-full"
//             placeholder="Enter your contact number"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block mb-2 font-semibold">Address</label>
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="border rounded p-2 w-full"
//             placeholder="Enter your address"
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-[#118B50] text-white px-4 py-2 rounded shadow"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [contactNumber, setContactNumber] = useState(""); // For contact number
  const [address, setAddress] = useState(""); // For address
  const [userData, setUserData] = useState(null); // To store the updated user data

  // Load user details when the component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/userprofile", {
          withCredentials: true, // Include credentials for authentication
        });
        setUserData(response.data); // Store the fetched user data
        setContactNumber(response.data.contactNumber || ""); // Load existing contact number
        setAddress(response.data.address || ""); // Load existing address
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form submission
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/profile/update", // Backend API endpoint
        { contactNumber, address }, // Data to update
        { withCredentials: true } // Include cookies for authentication
      );

      console.log(response);
      alert("Profile updated successfully!");

      // Fetch the updated user profile
      const updatedProfile = await axios.get("http://localhost:3000/userProfile", {
        withCredentials: true,
      });
      setUserData(updatedProfile.data); // Update the user data with the latest info
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        {/* Contact Number */}
        <div>
          <label className="block mb-2 font-semibold">Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter your contact number"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-semibold">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#118B50] text-white px-4 py-2 rounded shadow"
        >
          Update Profile
        </button>
      </form>

      {/* Display Updated Profile Info */}
      {userData && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your Updated Profile</h2>
          <p className="mt-2"><strong>Contact Number:</strong> {userData.contactNumber}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
