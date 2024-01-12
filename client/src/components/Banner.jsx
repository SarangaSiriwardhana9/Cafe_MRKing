import React from 'react';

const Banner = () => {
  return (
    <div className='section-container  bg-white '>
      <div className='py-30 flex flex-col md:flex-row-reverse justify-between items-center gap-6'>
        {/* small cards */}
        <div className='md:w-2/5  '>
          <img src='/banner9.png' alt='banner' className='w-full h-[800px]' />
          <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            
            
          </div>
        </div>
        {/* Text */}
        <div className='md:w-1/2 space-y-7 px-4'>
         <div className='  rounded-3xl shadow-xl  p-8 px-10 bg-simpleLightYellow'>
          <h2 className='md:text-4xl text-gray-800 text-4xl font-bold md:leading-snug leading-snug'>
          Embark on a Taste Journey: Unleash your Inner Foodie at <span className='text-textYellow '>MR King</span>

          </h2>
          <p className='text-gray-600 text-xl mt-4'>
          Nestled in the heart of Kaluthara, MR King invites you to experience the magic of Sri Lankan cuisine. We blend age-old traditions with modern twists, crafting dishes that tantalize your taste buds and transport you to a tropical paradise.
          </p>
          <a href='/menu'>
          <button  className='bg-yellow-300 shadow-2xl  text-slate-700 px-8 py-3 hover:bg-yellow-500  font-semibold mt-8 rounded-full hover:shadow-none hover:bg-green-600 transition-all duration-300'>
            Order Now
          </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;