import React, { useState } from "react";
import rentlink from "../assets/rentlink.jpg"; // Rentlink logo

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // Added role to formData
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-white">
      <div className="container w-[30%] p-8 border border-solid border-black rounded-lg shadow-lg bg-white">
        <div className="logo-container flex justify-center mb-4">
          <img
            src={rentlink}
            alt="rentlink logo"
            className="h-20 w-20 object-cover"
          />
        </div>

        <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#118B50" }}>
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#118B50]"
              required
            />
            <span className={`absolute right-4 top-3 text-sm ${
              formData.name.length >= 2 && formData.name.length <= 30
                ? "text-[#118B50]"
                : "text-red-500"
            }`}>
              {formData.name.length > 0 &&
                (formData.name.length >= 2 && formData.name.length <= 30
                  ? "✔"
                  : "❌")}
            </span>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#118B50]"
              required
            />
            <span
              className={`absolute right-4 top-3 text-sm ${
                validateEmail(formData.email)
                  ? "text-[#118B50]"
                  : "text-red-500"
              }`}
            >
              {formData.email.length > 0 &&
                (validateEmail(formData.email) ? "✔" : "❌")}
            </span>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#118B50]"
              required
            />
            <span
              className={`absolute right-4 top-3 text-sm ${
                formData.password.length >= 6
                  ? "text-[#118B50]"
                  : "text-red-500"
              }`}
            >
              {formData.password.length > 0 &&
                (formData.password.length >= 6 ? "✔" : "❌")}
            </span>
          </div>

          {/* Role Selection */}
          <div className="role-field flex items-center justify-evenly">
            <div
              className={`role-option flex flex-col items-center cursor-pointer ${
                formData.role === "Tenant" ? "border-[#118B50] border-2" : ""
              } p-2 rounded-lg`}
              onClick={() => setFormData({ ...formData, role: "Tenant" })}
            >
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.Dk8azl7qJ732wKnSxZxZHwHaHa&pid=Api&P=0&h=180"
                alt="Tenant"
                className="h-20 w-20"
              />
              <span className="mt-2 text-black">Tenant</span>
            </div>
            <div
              className={`role-option flex flex-col items-center cursor-pointer ${
                formData.role === "Landlord" ? "border-[#118B50] border-2" : ""
              } p-2 rounded-lg`}
              onClick={() => setFormData({ ...formData, role: "Landlord" })}
            >
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.OdfHmGiDI_wLhpMkditjlQHaI9&pid=Api&P=0&h=180"
                alt="Landlord"
                className="h-20 w-20"
              />
              <span className="mt-2 text-black">Landlord</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#118B50] text-white font-bold rounded-md hover:bg-[#37A772]"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#118B50] font-semibold">
              Login here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
