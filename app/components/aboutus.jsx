import React from 'react'
import Image from 'next/image'
import { aboutusdata } from './data'
const AboutUs = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="relative py-16 lg:py-20 mx-auto">
                 <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-400">
                        About Us
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                                width="52"
                                height="24"
                                
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>
                    Number Book Promotion Agency
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Greetings! Thank you for visiting! I'm Sarah Ismail,
                    your dedicated book promoter. In today's vast literary
                    landscape, writing a remarkable book is just the first step.
                    To ensure your masterpiece gets the recognition it deserves,
                    strategic promotion is key.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        className="object-cover  col-span-2 rounded shadow-lg"
                        src="/assets/images/image1.jpeg"
                        alt="image1"
                        width={500}
                        height={200}
                    />
                    <Image
                        className="object-cover rounded shadow-lg"
                        src="/assets/images/image2.jpeg"
                        alt="aboutimage"
                        width={500}
                        height={200}
                        
                    />
                    <Image
                        className="object-cover  rounded shadow-lg"
                        src="/assets/images/image3.jpeg"
                        alt="aboutimage"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="pb-4 mb-4 border-b">
                        <h6 className="mb-2 font-bold text-center leading-5">
                            Why choose my book promotion services?
                        </h6>
                        <p className="text-sm text-gray-900">
                            In a saturated market, connecting your book with the right audience is crucial.
                        </p>
                        <p className="text-sm text-gray-900">
                           My mission is to elevate your book's presence and ensure it reaches its intended readership and beyond.
                        </p>
                    </div>
                    <div className="pb-4 mb-4 border-b">
                        <h6 className="mb-2 font-bold leading-5 text-center">
                            Here's how I can make a difference:
                        </h6>
                        {aboutusdata.map((aboutdata) => (
                            <div key={aboutdata.id}>
                                <div className="flex">
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
                                        <p className="text-sm text-gray-900">
                                            {aboutdata.text}
                                        </p>
                                        <hr className="w-full my-2 border-gray-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default AboutUs
