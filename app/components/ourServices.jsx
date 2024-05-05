import React from 'react'
import Image from 'next/image';
import { ourServicesList } from './data';
const OurServices = () => {
    return (
        <div className="container mx-auto w-full">
            <div className='relative py-16 lg:py-20 mx-auto'>
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Our  Services
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We are committed to delivering top-notch services that empower you to achieve your goals.
                            Our expert guidance paves the way for success,
                            enhancing the visibility and growth of your business with personalized
                            strategies tailored just for you.
                        </p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <p className="  px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-400">
                        Services include:
                    </p>
                    </div>
                    
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        {ourServicesList.map((services) => (
                            <ul className="space-y-3" key={services.id}>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-green-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                
                                            />
                                        </svg>
                                    </span>
                                    {services.text}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div>
                    <Image
                        className="object-cover   rounded shadow-lg "
                        src="/assets/images/image.jpeg"
                        alt="ourservices"
                        width={500}
                        height={1500}
                        
                    />
                </div>
            </div>
            </div>
            
        </div>
  );
};
  

export default OurServices