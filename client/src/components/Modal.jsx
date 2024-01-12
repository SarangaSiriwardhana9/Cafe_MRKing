import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import SignupModal from "./SignupModal";

const Modal = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //react hook form
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const userInfor = {
          name: data.name,
          email: data.email,
        };
        axios
          .post("http://localhost:6001/users", userInfor)
          .then((response) => {
            // console.log(response);
            alert("Signin successful!");
            console.log(user);
            navigate(from, { replace: true });
            /* close modal */
            document.getElementById("my_modal_5").close();
           
          });
          alert("Login successful!");
        console.log(user);
        navigate(from, { replace: true });
        /* close modal */
        document.getElementById("my_modal_5").close();

        
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterrorMessage("Please provide valid email & password!");
      });
      reset()

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
        axios
          .post("http://localhost:6001/users", userInfor)
          .then((response) => {
            // console.log(response);
            alert("Signin successful!");
            navigate("/");
          });
          alert("Login successful!");
          
      })
      .catch((error) => console.log(error));
  };

  const openSignupModal = () => {
    document.getElementById("my_modal_5").close();
    document.getElementById("my_modal_7").showModal();
    
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex-col justify-center mt-0">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-slate-600 text-xl text-center mb-4">Please Login!</h3>

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
                <span className="label-text text-slate-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered text-gray-600 bg-yellow-100"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-2">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* show errors */}
            {errorMessage ? (
              <p className="text-red text-xs italic ">
                Provide a correct username & password.
              </p>
            ) : (
              ""
            )}

            {/* submit btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-yellow-300 hover:bg-yellow-400 border-none w-full text-gray-600  text-lg"
                value="Login"
              />
            </div>

            {/* close btn */}
            <div
              htmlFor="my_modal_5"
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </div>

           {/* Signup link */}
           <p className="text-center my-2 text-slate-600">
            Don't have an account?
            <Link to = "/signup"  className="underline  text-yellow-700 ml-1">
              Signup Now
            </Link>
            
          </p>

          <SignupModal/>
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
  );
};

export default Modal;
