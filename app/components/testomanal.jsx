import React from "react";
import { testimonials } from "./data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-[#303030] w-full">
        <div className="container mx-auto w-full">
          <div className="relative py-16 lg:py-20 mx-auto">
            <div className="pt-6">
              <button className="border border-green-400 px-4 py-1 rounded-md text-xs font-semibold  text-white">
                {" "}
                Testimonials
              </button>{" "}
              <h2 className="text-white py-6">Our happy clients</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="overflow-hidden transition-shadow duration-300 bg-white p-5 shadow-xl rounded-md"
                >
                  <div className="flex space-x-2 py-4">
                    <FaStar size={15} className="text-yellow-500" />
                    <FaStar size={15} className="text-yellow-500" />
                    <FaStar size={15} className="text-yellow-500" />
                    <FaStar size={15} className="text-yellow-500" />
                    <FaStar size={15} className="text-yellow-500" />
                  </div>
                  <p className=" text-primary-100 max-w-xs pb-2">{testimonial.text}</p>
                  <div className="flex gap-2  ">
                    
                      <Image
                                  src={testimonial.cover}
                                  className=" rounded-full object-cover"
                        alt={testimonial.authorname}
                        width={50}
                        height={50}
                      />
                   

                    <div className="mr-3 flex flex-col ">
                      <p className="text-grey-90"> {testimonial.authorname}</p>
                      <p className="text-grey-60 p-sm">{testimonial.skill}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;