import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';
import useCart from "../hooks/useCart";
import axios from 'axios';
import Modal from "./Modal"

const HomeCards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, quantity: 1, image, price, email: user.email };
      axios.post('http://localhost:6001/carts', cartItem)
        .then((response) => {
          console.log(response);
          if (response) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Food added to the cart.',
              showConfirmButton: false,
              timer: 1500
            });
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
          });
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
      });
    }
  };

  return (
    <div className="bg-cardYellow  rounded-lg overflow-hidden shadow-2xl max-w-xs mx-auto mb-6 mt-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover object-center"
        />
        <button
          onClick={handleHeartClick}
          className="absolute top-2 right-2 text-red-500"
        >
          {isHeartFilled ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg text-slate-700 font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{recipe}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold  text-orange-800">${price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-300 hover:bg-mYyellow text-black font-bold py-1 px-3 rounded-full  "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;