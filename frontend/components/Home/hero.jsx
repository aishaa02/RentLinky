import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

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
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-black mb-6">
        Explore Available Homes
      </h2>
      {homes.length === 0 ? (
        <p className="text-center text-gray-700">No homes available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
