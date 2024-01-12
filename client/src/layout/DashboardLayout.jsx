import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { FaUsers, FaShoppingBag, FaUser, FaLocationArrow, FaQuestionCircle } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import logo from "/logo2.png";
import { FaCartShopping } from "react-icons/fa6";

import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const DashboardLayout = () => {
  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isItemActive = (pathname) => {
    // Compare the current location pathname with the link's "to" attribute
    return location.pathname === pathname;
  };

  const sharedLinks = (
    <>
      <li className="mt-3">
        <Link to="/">
          <MdDashboard /> Home
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaCartShopping /> Menu
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaLocationArrow /> Orders Tracking
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaQuestionCircle /> Customer Support
        </Link>
      </li>
      {/* for logout */}
      <li>
        <button onClick={handleLogout}>
          <FaUser /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div>
      
        <div className="drawer outlet-background  sm:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle outlet-background " />
          <div className="drawer-content h-screen  outlet-background flex flex-col  my-2">
            {/* Page content here */}
            <div className='flex items-center  justify-between mx-4 outlet-background '>
              <label htmlFor="my-drawer-2" className="btn drawer-button border-none text-2xl bg-slate-300 text-yellow-200 lg:hidden">
                <MdDashboard />
              </label>
            </div>

            <div className='  h-screen outlet-background '>
              <Outlet />
            </div>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 w-80 min-h-full text-base-content text-slate-400 bg-stone-950 ">
              {/* Sidebar content here */}
              <li>
                <Link to="/dashboard" className='flex justify-start mb-3'>
                  <img src={logo} alt="logo" className="w-[150px]" />
                  <span className="badge ">Admin</span>
                </Link>
              </li>
              <hr />
              <li className={`hover:bg-white hover:text-slate-700 mt-3 rounded-md my-1 h-10 justify-center ${isItemActive('/dashboard') ? 'bg-yellow-100 text-slate-800' : ''}`}>
                <Link to="/dashboard"><MdDashboard />Dashboard</Link>
              </li>
              <li className={`hover:bg-white rounded-md my-1 h-10 justify-center ${isItemActive('/dashboard/bookings') ? 'bg-yellow-100 text-slate-800' : ''}`}>
                <Link to="/dashboard/manage-booking"><FaShoppingBag />Manage Bookings</Link>
              </li>
              <li className={`hover:bg-white rounded-md my-1 h-10 justify-center ${isItemActive('/dashboard/add-menu') ? 'bg-yellow-100 text-slate-800' : ''}`}>
                <Link to="/dashboard/add-menu"><MdAddBusiness />Add Menu</Link>
              </li>
              <li className={`hover:bg-white rounded-md my-1 h-10 justify-center ${isItemActive('/dashboard/manage-items') ? 'bg-yellow-100 text-slate-800' : ''}`}>
                <Link to="/dashboard/manage-items"><IoFastFood />Manage Items</Link>
              </li>
              <li className={`hover:bg-white rounded-md my-1 h-10 justify-center ${isItemActive('/dashboard/users') ? 'bg-yellow-100 text-slate-800' : ''}`}>
                <Link to="/dashboard/users"><FaUsers />All Users</Link>
              </li>
              <hr className='border-t border-slate-400' />

              {/* shared nav links */}
              {sharedLinks}
            </ul>
          </div>
        </div>
      
    </div>
  );
};

export default DashboardLayout;
