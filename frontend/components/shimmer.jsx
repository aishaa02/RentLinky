import React from 'react';

const Shimmer = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Shimmer for Hero Section */}
      <div className="h-56 w-full bg-gray-300 animate-pulse rounded-lg"></div>

      {/* Shimmer for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md animate-pulse"
          >
            <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-300"></div>
          </div>
        ))}
      </div>

      {/* Shimmer for Footer */}
      <div className="h-16 w-full bg-gray-300 animate-pulse rounded-lg"></div>
    </div>
  );
};

export default Shimmer;
