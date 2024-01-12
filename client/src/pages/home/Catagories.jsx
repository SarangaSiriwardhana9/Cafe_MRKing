import React from 'react';

const categoryItems = [
  {
    id: 1,
    title: 'Breakfast',
    des: '22 breakfast',
    image: "/breakfast.png"
  },
  {
    id: 2,
    title: 'Lunch',
    des: '28 Lunch',
    image: "/lunch.png"
  },
  {
    id: 3,
    title: 'Dinner',
    des: '32 Dinner',
    image: "/dinner.png"
  },
  {
    id: 4,
    title: 'Dessert',
    des: '14 Dessert',
    image: "/dessert.png"
  },
];

const Categories = () => {
  return (
    <div className='section-container py-8'>
      <div className='text-start mb-8'>
        <p className='subtitle'>King's Kitchen</p>
        <p className='title'>Menu Categories</p>
      </div>

      {/* Category cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className='card fixed-height flex flex-col items-center justify-center p-4 rounded-lg shadow-xl hover:shadow-xl transition-all duration-300'
            style={{ height: '250px' /* Adjust height as needed */ }}
          >
            <img src={item.image} alt='category' className='w-38 h-32' />
            <p className='text-lg font-semibold text-gray-600 mt-2'>{item.title}</p>
            <p className='text-sm font-medium text-center text-gray-500 mt-1'>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;