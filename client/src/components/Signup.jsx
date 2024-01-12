import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle, FaRegUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Modal from "./Modal";

const Signup = () => {
  const { signUpWithGmail, createUser, updateUserProfile } =
    useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        updateUserProfile(data.email, data.photoURL).then(() => {
          const userInfor = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfor)
            .then((response) => {
               console.log(response);
              alert("Signin successful!");
              navigate(from, { replace: true });
            });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic
          .post("/users", userInfor)
          .then((response) => {
            // console.log(response);
            alert("Signin successful!");
            navigate("/");
          });
          alert("Signin successful!");
            navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleModalClose = () => {
    // Navigate back to the previous page or any desired route
    navigate(-1);
  };

  const handleLoginClick = () => {
    handleModalClose(); 
    document.getElementById("my_modal_5").showModal(); 
    
    

  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow">
        <div className="relative mb-6">
          <button
            htmlFor="my_modal_5"
            className="absolute top-0 right-0 mr-4 mt-4 p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            onClick={handleModalClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-xl text-center mb-4">Create New Account</h3>
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="text-base text-gray-700">Name</label>
            <input
              type="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-600 bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              {...register("name")}
            />
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label className="text-base text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-600 bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              {...register("email")}
            />
          </div>
  
          {/* Password */}
          <div className="mb-4">
            <label className="text-base text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-600 bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              {...register("password")}
            />
          </div>
  
          {/* Error message */}
          <p className="text-red-500 mb-4">{errors.message}</p>
  
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-600 text-lg font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value="Sign up"
          >
            Signup
          </button>
  
          <div className="text-center my-4 text-base text-gray-700">
            Have an account?
            <span onClick={handleLoginClick} className="ml-2 underline text-yellow-700 cursor-pointer">Login here</span>
          </div>
        </form>
  
        <div className="flex justify-center space-x-3 mb-5">
          <button
            onClick={handleRegister}
            className="p-3 rounded-full bg-yellow-200 text-gray-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <FaGoogle />
          </button>
          <button
            className="p-3 rounded-full bg-yellow-200 text-gray-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <FaFacebookF />
          </button>
          <button
            className="p-3 rounded-full bg-yellow-200 text-gray-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;