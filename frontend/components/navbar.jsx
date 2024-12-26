import React, { useContext } from "react";
import { context } from "../main.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthorised, user } = useContext(context);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link to="/" className="text-xl font-bold text-[#118B50]">
          RentLink
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          {!isAuthorised ? (
            // If not logged in, show Sign In and Sign Up links
            <>
              <Link to="/login" className="text-[#118B50]">Sign In</Link>
              <Link to="/registration" className="text-[#118B50]">Sign Up</Link>
            </>
          ) : (
            // If logged in, show Profile and Role-specific links
            <>
              <Link to="/profile" className="text-[#118B50]">
                Profile
              </Link>
              {user.role === "Tenant" ? (
                // Tenant role-specific link
                <Link to="/tenant/gethouses" className="text-[#118B50]">
                  Search Houses
                </Link>
              ) : user.role === "Landlord" ? (
                // Landlord role-specific link
                <Link to="/landlord/Host" className="text-[#118B50]">
                  Host House
                </Link>
              ) : null}
              <Link to="/logout" className="text-[#118B50]">Logout</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
