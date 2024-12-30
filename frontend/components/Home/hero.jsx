



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./card.jsx";

// const Hero = () => {
//   const [homes, setHomes] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend
//     axios
//       .get("http://localhost:3000/getHouses", { withCredentials: true })
//       .then((response) => {
//         setHomes(response.data); // Set the array of houses from response data
//       })
//       .catch((error) => {
//         console.error("Error fetching homes:", error);
//       });
//   }, []);

//   return (
//     <section className="py-12 px-6 bg-[#ededed]">
//       <h2 className="text-4xl font-bold text-[#118B50] text-center mb-10">
//         Explore Available Homes
//       </h2>
//       {homes.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No homes available at the moment. Please check back later.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {homes.map((home) => (
//             <Card
//               key={home._id} // Use _id as the key
//               id={home._id} // Pass _id as the id prop
//               hometype={home.hometype}
//               location={home.location}
//               bedrooms={home.bedrooms}
//               beds={home.beds}
//               bathrooms={home.bathrooms}
//               price={home.price || "Price not available"} // Fallback for missing price
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card.jsx";

const Hero = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:3000/getHouses", { withCredentials: true })
      .then((response) => {
        setHomes(response.data); // Set the array of houses from response data
      })
      .catch((error) => {
        console.error("Error fetching homes:", error);
      });
  }, []);

  return (
    <section className="py-12 px-6 bg-[#ededed]">
      <h2 className="text-4xl font-bold text-[#118B50] text-center mb-10">
        Explore Available Homes
      </h2>
      {homes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No homes available at the moment. Please check back later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {homes.map((home) => (
            <Card
              key={home._id} // Use _id as the key
              id={home._id} // Pass _id as the id prop
              hometype={home.hometype}
              location={home.location}
              bedrooms={home.bedrooms}
              beds={home.beds}
              bathrooms={home.bathrooms}
              price={home.price || "Price not available"} // Fallback for missing price
              coverImage={home.images.coverImage} // Pass only coverImage to Card
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
