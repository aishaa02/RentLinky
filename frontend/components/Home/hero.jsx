import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card.jsx";

const Hero = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:3000/getHouses") // Replace with your API endpoint
      .then((response) => {
        setHomes(response.data); // Assuming response.data is the array of homes
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {homes.map((home) => (
          <Card
            key={home.id}
            id={home.id}
            hometype={home.hometype}
            location={home.location}
            bedrooms={home.bedrooms}
            beds={home.beds}
            bathrooms={home.bathrooms}
            price={home.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
