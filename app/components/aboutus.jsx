import React from 'react';
import Image from 'next/image';
import { aboutusdata } from './data';

const AboutUs = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="relative py-16 lg:py-20 mx-auto">
                <div className="grid  gap-8 lg:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3">
                        <Image
                            className="object-cover  col-span-2 rounded shadow-lg"
                            src="/assets/images/image1.jpeg"
                            alt="image1"
                            width={500}
                            height={100}
                            
                        />
                        <Image
                            className="object-cover rounded shadow-lg"
                            src="/assets/images/image2.jpeg"
                            alt="aboutimage"
                            width={500}
                            height={100}
                            
                        />
                        <Image
                            className="object-cover  rounded shadow-lg"
                            src="/assets/images/image3.jpeg"
                            alt="aboutimage"
                            width={500}
                            height={100}
                            
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-400">
                                About Us
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
                            Your Premier Book Promotion Agency
                        </h2>
                        <p className="text-base text-gray-700 md:text-md text-center">
                            Welcome to Sarah Ismail Agency, where we specialize
                            in elevating authors and their books to new heights
                            of success. Our agency is founded on the belief that every authors
                            voice deserves to be heard and every book deserves its moment in the spotlight.
                        </p>
                        <div className="pt-6 mb-4">
                            <h6 className="mb-2 font-bold text-center  leading-5">

                                Why Choose Sarah Ismail Agency for Your <br /> Book Promotion Needs
                            </h6>
                            <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
                                <div className="bg-white border-l-4 shadow-sm border-green-400 p-4">
                                    <p className="text-sm text-gray-900 mb-6 text-justify">
                                        <span className=' font-bold text-sm '>Vision: <br/> </span> 
                                        To create a literary landscape where every book finds
                                        its ideal readership, fostering a
                                        deep connection between authors and readers that transcends
                                        boundaries and enriches lives.
                                    </p>
                                </div>
                                <div className='bg-white border-l-4 shadow-sm border-green-400 p-4 '>
                                    <p className="text-sm text-gray-900 text-justify">
                                        <span className=" font-bold text-sm ">Mission: <br /></span>
                                        In a crowded market, we bridge the gap between authors and readers by
                                        elevating each books presence, ensuring it connects deeply with its
                                        intended audience and resonates beyond expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 ">
                    <h6 className="mb-6 font-bold leading-5 text-[1.50rem] text-center">
                        Here&apos;s how we can make a difference:
                    </h6>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {aboutusdata.map((aboutdata) => (
                            <div className='flex flex-col justify-between p-5 border rounded shadow-sm' key={aboutdata.id}>
                                <div className="">
                                    <div className="mr-4">
                                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                    
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            {aboutdata.desc}
                                        </h6>
                                        <p className="text-sm text-gray-900 text-justify">
                                            {aboutdata.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
