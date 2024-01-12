import React from 'react'

const AboutUs = () => {
  return (
    <div className=' bg-white menu-background'>
      <div className='section-container  '>
        <div className=' flex flex-col md:flex-row-reverse justify-between  items-center gap-6'>
        {/* Left side */}
        

        <div className='md:w-3/5 space-y-7  bg-simpleLightYellow p-4 rounded-2xl mt-32'>
            <h2 className='text-3xl font-semibold text-slate-700'>About Us</h2>
            <p className='text-gray-800'>
            MR King is a family-owned restaurant that has been serving the Kaluthara community for over 30 years. We specialize in Sri Lankan cuisine, and we are proud to offer a wide variety of dishes from all over the country.
            </p>
            <p className='text-gray-800'>
            We are committed to providing our customers with the best possible experience. Our goal is to make sure that every customer leaves satisfied and happy with their meal. If you have any questions or concerns, please feel free to contact us at any time!
            </p>
            <p className='text-gray-800'>
            We hope you enjoy your visit to MR King!
            </p>
        </div>

        {/* Right Side */}

        <div className='md:w-2/5 h-screen mt-20'>
          <img src='/About.png' alt='banner' className=' w-full h-[600px]' />
        </div>
    </div>
</div>
</div>
  )
}

export default AboutUs