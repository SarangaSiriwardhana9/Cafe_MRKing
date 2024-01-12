import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUtensils } from 'react-icons/fa';

const UpdateMenu = () => {
    const item = useLoaderData();
    console.log(item);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate()
  
    // image hosting key
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // console.log(image_hosting_key)
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const onSubmit = async (data) => {
      // console.log(data)
      const imageFile = { image: data.image[0] };
      const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // console.log(hostingImg.data)
      if (hostingImg.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price), 
          recipe: data.recipe,
          image: hostingImg.data.data.display_url
        };
  
        // console.log(menuItem);
        const postMenuItem = axiosSecure.patch(`/menu/${item._id}`, menuItem);
        if(postMenuItem){
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your item updated successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/dashboard/manage-items")
        }
      }
    };
  return (
    <div className="w-full md:w-[870px]  mt-4 px-4 mx-auto">
     

    {/* form here */}
    <div className="bg-stone-950 rounded-2xl mt-4 px-4 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl text-slate-500 text-center font-semibold mt-4 ">
        Update <span className="  text-yellow-600">Menu Item</span>
      </h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={item.name}
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>

          {/* 2nd row */}
          <div className="flex items-center gap-4">
            {/* categories */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                defaultValue={item.category}
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="rice">Rice</option>
                <option value="kottu">Kottu</option>
                <option value="burger">Burger</option>
                <option value="noodles">Noodles</option>
                <option value="dessert">dessert</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
              </select>
            </div>

            {/* prices */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={item.price}
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
             defaultValue={item.recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Tell the worlds about your recipe"
            ></textarea>
          </div>

          {/* 4th row */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn  bg-myHoverYellow hover hover:bg-mYyellow text-slate-700 px-6">
            Update Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateMenu