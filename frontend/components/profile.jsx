// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for errors
//   const navigate = useNavigate(); // React Router navigation hook

//   // Fetch profile details
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
//         setUser(response.data); // Set user data
//       } catch (err) {
//         setError(err.response ? err.response.data.message : 'An error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Validation before navigating to edit page
//   const handleEditProfile = () => {
//     if (!user.contactNumber || !user.address) {
//       alert('Please ensure your contact number and address are filled in before proceeding.');
//     } else {
//       navigate('/profileUpdate'); // Navigate to edit profile page
//     }
//   };

//   // Render profile details or loading/error state
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="profile-container">
//       <h1 className="text-xl font-bold mb-4">Profile</h1>
//       {user && (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Role:</strong> {user.role}</p>
//           {user.contactNumber && <p><strong>Contact Number:</strong> {user.contactNumber}</p>}
//           {user.address && <p><strong>Address:</strong> {user.address}</p>}

//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             onClick={handleEditProfile} // Call validation function
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for errors
  const navigate = useNavigate(); // React Router navigation hook

  // Fetch profile details
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
        setUser(response.data); // Set user data
      } catch (err) {
        setError(err.response ? err.response.data.message : 'An error occurred');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
  }, []);

  // Validation before navigating to edit page
  const handleEditProfile = () => {
   
      
   
      navigate('/profileUpdate'); // Navigate to edit profile page
  
  };

  // Render profile details or loading/error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-[#ededed]">
      <div className="container w-[30%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
        <h1 className="text-xl font-bold mb-4 text-[#222]">Profile</h1>
        {user && (
          <div>
            <p className="text-[#222]"><strong>Name:</strong> {user.name}</p>
            <p className="text-[#222]"><strong>Email:</strong> {user.email}</p>
            <p className="text-[#222]"><strong>Role:</strong> {user.role}</p>
            {user.contactNumber && <p className="text-[#222]"><strong>Contact Number:</strong> {user.contactNumber}</p>}
            {user.address && <p className="text-[#222]"><strong>Address:</strong> {user.address}</p>}

            <button
              className="bg-[#222] text-white px-4 py-2 rounded mt-4 hover:bg-[#111]"
              onClick={handleEditProfile} // Call validation function
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
