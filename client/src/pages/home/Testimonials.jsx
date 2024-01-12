import React from 'react'
import{FaStar} from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className='section-container bg-white'>
            <div className='flex flex-col md:flex-row items-center  justify-between gap-12 '>
                {/* left side */}
                <div className='md:w-2/3  '>
                    <img src="./testimonials2.png" alt="testimonials" className="w-full h-[500px]  " />
                </div>

                {/* right side*/}

                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/s'>
                        <p className='subtitle'>Testimonials</p>
                        <h2 className='title'>What our Customers Say About Us </h2>
                        <div className=' ml-2'>
                        <blockquote className='text-base  font-medium text-secondary my-5 leading-[30px] '>
                        "Exceptional service and mouthwatering dishes! MRKing has redefined convenience without compromising on flavor. The diverse menu caters to all tastes, and the delivery is always prompt. Our family's favorite for online food orders in Sri Lanka!"
                        </blockquote>

                        {/* Avatar */}

                        <div className='flex items-center gap-4 flex-wrap'>
                            <div className="avatar-group border-none -space-x-6 rtl:space-x-reverse">
                                <div className="avatar border-none">
                                    <div className="w-12">
                                        <img src="./profile/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar border-none">
                                    <div className="w-12">
                                        <img src="./profile/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar border-none">
                                    <div className="w-12">
                                        <img src="./profile/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder border-none">
                                    <div className="w-12 bg-neutral text-neutral-content bg-slate-200  ">
                                        <span className=' text-black'>+99</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-1'>
                            <h5 className='text-lg font-semibold'> Customers Feedbacks</h5>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-yellow-400'/>
                                <span className='font-medium'>4.9</span>
                                <span className=' text-[#807E7E]'>(18.6k Reviews)</span>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials