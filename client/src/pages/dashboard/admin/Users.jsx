import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      alert(`${user.name} is now an admin`);
      refetch();
    });
  };

  const handleDeleteUser = (user) => {
    axiosSecure.delete(`/users/${user._id}`).then((res) => {
      alert(`${user.name} has been removed from the database`);
      refetch();
    });
  };

  return (
    <div className="w-full md:w-[900px] px-4 mx-auto">
      <div className="bg-stone-950 rounded-2xl mt-4 px-4 py-4">
      {/* header */}
      <h1 className="text-4xl font-bold text-center">Users</h1>

      <h5 className="text-2xl font-bold mb-4">Total Users: {users.length}</h5>

      <div className="overflow-x-auto">
        <table className="border border-gray-300 w-full rounded-md">
          <thead className="bg-yellow-300 text-slate-700">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-stone-950" : ""}>
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">
                  {user.role === "admin" ? (
                    <span className="bg-indigo-500 text-white py-1 px-2 rounded-full">
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-indigo-500 text-white py-1 px-2 rounded-full"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-orange-500 text-white py-1 px-2 rounded-full"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Users;