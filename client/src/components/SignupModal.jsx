import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaFacebookF, FaGithub, FaGoogle, FaRegUser } from "react-icons/fa";
import Modal from "./Modal";

const SignupModal = () => {
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
  console.log(email, password)
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
            // console.log(response);
            alert("Signin successful!");
            
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
    })
    .catch((error) => console.log(error));
};

    const openLoginModal = () => {
        document.getElementById("my_modal_7").close();
        document.getElementById('my_modal_5').showModal()
    }


  return (
    <dialog id="my_modal_7" className="modal modal-middle sm:modal-middle">
    <div className="modal-box bg-white">
    <div className="mb-5">
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-slate-600 text-xl text-center mb-4">Create New Account</h3>
          
         
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-slate-700">Name</span>
            </label>
            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered text-gray-600 bg-yellow-100"
              {...register("name")}
            />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-slate-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered text-gray-600 bg-yellow-100"
              {...register("email")}
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-slate-700">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-gray-600 bg-yellow-100"
              {...register("password")}
            />
        
          </div>

          {/* error message */}
          <p>{errors.message}</p>

          {/* submit btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-yellow-300 hover:bg-yellow-400 border-none w-full text-gray-600  text-lg"
              value="Sign up"
            />
          </div>

          <div className="text-center my-2 text-base text-slate-700">
            Have an account?
            
              <Link onClick={openLoginModal} className="ml-2 underline text-yellow-700">Login here</Link>
               {/* close btn */}
           <div
              htmlFor="my_modal_5"
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2"
              onClick={() => document.getElementById("my_modal_7").close()}
            >
              ✕
            </div>
              
          </div>
           
        </form>
        <div className="text-center space-x-3 mb-5">
            <button
              onClick={handleRegister}
              className="btn btn-circle bg-yellow-200  border-none  text-gray-600 hover:bg-yellow-300"
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-yellow-200  border-none  text-gray-600 hover:bg-yellow-300">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle bg-yellow-200  border-none  text-gray-600 hover:bg-yellow-300">
              <FaGithub />
            </button>
          </div>
        
        
   
    </div>
  </div>
  
  </dialog>
  
  )
}

export default SignupModal