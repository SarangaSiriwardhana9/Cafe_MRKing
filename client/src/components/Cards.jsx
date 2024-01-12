import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';
import useCart from "../hooks/useCart";
import axios from 'axios';
import Modal from "./Modal"

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  // add to cart handler
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, quantity: 1, image, price, email: user.email };
      axios.post('http://localhost:6001/carts', cartItem)
        .then((response) => {
          console.log(response);
          if (response) {
            refetch(); // refetch cart
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Food added to the cart.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          const errorMessage = error.response.data.message;
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `${errorMessage}`,
            showConfirmButton: false,
            timer: 1500
          })
        });
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById('my_modal_5').showModal();
        }
      })
    }
  };

  return (
    <div className="bg-cardYellow rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="flex justify-center items-center">
      <img src={image} alt={name} className="w-[300px] mt-3 h-48 rounded-t-lg" />
    </div>
    <div className="p-3">
        <h3 className="text-xl  text-gray-900">{name}</h3>
        <p className=" mt-2  text-xs text-gray-500  h-20 overflow-hidden">{recipe}</p>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
          <button className="bg-yellow-300 hover:bg-mYyellow text-black font-bold py-1 px-3 rounded-full mt-2" onClick={() => handleAddToCart(item)}>
          Add to Cart
        </button>
          </div>
          <p className=" text-base font-bold  text-orange-800 mr-2">Rs.{price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
