import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Order = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('access-token');

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:6001/payments?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return res.json();
    },
  });

  const formatDateTime = (dateTimeString) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateTimeString).toLocaleTimeString(undefined, options);
  };

  const renderTable = () => {
    return (
      
      <div className="section-container bg-white min-h-screen overflow-x-auto">
        
        <div className="max-w-screen-2xl mx-auto xl:px-8 pt-20 pb-16">
        <h2 className="text-2xl text-center text-slate-700 font-semibold mb-4">Order History</h2>
          <table className="min-w-full bg-simpleLightYellow border border-gray-300 shadow-xl ">
            <thead>
              <tr className="bg-yellow-200 text-slate-700">
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Time</th>
                <th className="border-b p-2">Transaction ID</th>
                <th className="border-b p-2">Price</th>
                <th className="border-b p-2">Status</th>
                
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={item.transactionId} className=' text-center text-slate-600'>
                  <td className="border-b p-2   text-center">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td className="border-b p-2">{formatDateTime(item.createdAt)}</td>
                  <td className="border-b p-2">{item.transactionId}</td>
                  <td className="border-b p-2">Rs .{item.price}</td>
                  <td className={`border-b p-2 ${item.status === 'completed' ? 'text-green-500' : 'text-orange-500'}`}>{item.status}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Link to="/contact-us" >
        <button className="bg-yellow-300 text-slate-700 text-base py-2 px-4 rounded">Contact Us</button>
        </Link>
      </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      
      {orders.length > 0 ? renderTable() : <p>No orders found.</p>}
      
    </div>
  );
};

export default Order;
