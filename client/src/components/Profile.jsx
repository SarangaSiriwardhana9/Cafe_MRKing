import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import { FaVanShuttle } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";



const Profile = ({ user }) => {
  
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const [isAdmin, isAdminLoading] = useAdmin();

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/")
        /* console user data */
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        {/* Open drawer */}
        <label htmlFor="my-drawer-4">
  {user && user.photoURL ? (
    <img src={user.photoURL} alt="" className="rounded-full w-8 h-8" onError={(e) => e.target.src = '/profile/profile.png'} />
  ) : (
    <FaUserCircle className="w-7 h-7 text-yellow-300 mb-2 text-xl" />
  )}
</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-50 text-base-content text-slate-600 ">

          {/* Sidebar content here */}
          {isAdmin ? (
          <li>
            <Link
              className="flex items-center block py-4 px-8  text-base hover:bg-yellow-200  hover:text-black text-green-600"
              to="/dashboard"
            >
              <CgProfile className="mr-2 text-xl hover:text-black" />
              Dashboard
            </Link>
          </li>
          ) : (
            <div></div>
          )}
          <li>
            <Link
              className="flex items-center block py-4 px-8  text-base hover:bg-yellow-200  hover:text-black text-green-600"
              to="/update-profile"
            >
              <CgProfile className="mr-2 text-xl hover:text-black" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center block py-4 px-8  text-base hover:bg-yellow-200  hover:text-black text-green-600"
              to="/order"
            >
              <FaVanShuttle className="mr-2 text-xl hover:text-black" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center block py-4 px-8  text-base hover:bg-yellow-200 hover:text-black text-green-600"
              to="/contact-us"
            >
              <IoCall className="mr-2 text-xl hover:text-black" />
              Contact
            </Link>
          </li>
          <li>
            
          </li>
        
          <li>
            <Link
              className="flex items-center block py-4 px-8  text-base hover:bg-LightHoverRed  hover:text-black text-red-600"
              onClick={handleLogout}
            >
              <IoMdLogOut className="mr-2 text-xl hover:text-black" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Profile;
