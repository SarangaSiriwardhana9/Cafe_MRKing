import React from 'react';

const ManageBooking = () => {
  // Dummy booking data
  const bookingData = [
    {
      id: 1,
      userName: 'John Doe',
      bookingDate: '2024-01-15',
      time: '19:00',
      tableNo: 5,
    },
    {
      id: 2,
      userName: 'Jane Smith',
      bookingDate: '2024-01-16',
      time: '20:30',
      tableNo: 8,
    },
    {
      id: 3,
      userName: 'Michael Johnson',
      bookingDate: '2024-01-17',
      time: '18:15',
      tableNo: 3,
    },
    {
      id: 4,
      userName: 'Alice Brown',
      bookingDate: '2024-01-18',
      time: '21:00',
      tableNo: 2,
    },
    {
      id: 5,
      userName: 'Emily Wilson',
      bookingDate: '2024-01-19',
      time: '19:45',
      tableNo: 7,
    },
    {
      id: 6,
      userName: 'David Lee',
      bookingDate: '2024-01-20',
      time: '20:15',
      tableNo: 4,
    },
    // Add more dummy data here
  ];

  return (
    <div className="w-full md:w-[900px] px-4 mx-auto">
      <div className="bg-stone-950 rounded-2xl mt-4 px-4 py-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center">Manage Bookings</h1>

        {/* Booking Table */}
        <div className="overflow-x-auto mt-6">
          <table className="border border-gray-300 w-full rounded-md">
            <thead className="bg-yellow-300 text-slate-700">
              <tr>
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">User Name</th>
                <th className="py-3 px-6 text-left">Booking Date</th>
                <th className="py-3 px-6 text-left">Time</th>
                <th className="py-3 px-6 text-left">Table No</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr key={booking.id} className="bg-stone-950">
                  <td className="py-3 px-6">{booking.id}</td>
                  <td className="py-3 px-6">{booking.userName}</td>
                  <td className="py-3 px-6">{booking.bookingDate}</td>
                  <td className="py-3 px-6">{booking.time}</td>
                  <td className="py-3 px-6">{booking.tableNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
