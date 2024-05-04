'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 
 const handleMenuClick = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

 
  return (
    <div className=" fixed inset-x-0 z-50 bg-slate-50">
      <div className= " container py-5 mx-auto ">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
           <Link href="/" aria-label="Company" title="Company">
            <Image src="/assets/images/logoimage.png" width={50} height={10} alt="logo" className="object-cover" />
          </Link>
          {/* Main Menu */}
          <ul className="hidden items-center space-x-4 lg:flex">
            
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="/" className="nav-link"> Our Services</Link>
            </li>
            <li>
              <Link href="/" className="nav-link">About Us</Link>
            </li>
            <li>
              <Link href="/" className="nav-link"> Contact Us </Link>
            </li>
          </ul>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
             <Link className=" bg-black text-green-400 hover:text-green-800 px-4 py-3 rounded-full font-bold" href="https://www.fiverr.com/emiliamelissa87?public_mode=true&fbclid=IwZXh0bgNhZW0CMTAAAR1KFwSSASIhXZXdTpyvhPySXQx-V9EVMbV1OTtHuQHUf-2IjPPk9g1gpkc_aem_AXO2IabRFBGFis_se7TXMhdV4FKISODvzAvx2KtNXKdjpbsMKa_0uw-77SN3fGQLod77Ifa67hY1lfl2YDmQwPWF" target="blank">Find Us On Fiverr</Link>
            </li>
            
          </ul>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={handleMenuClick}
            >
              <AiOutlineMenu className="w-5 h-5" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    {/* Logo for mobile menu */}
                    <Link href="/">
                      <Image src="/assets/skyfitlogo.JPG" width={50} height={5} alt="logo" className="object-cover" />
                    </Link>
                    {/* Close button for mobile menu */}
                    <button className="p-2 -mt-2 -mr-2 transition duration-200 rounded" onClick={handleMenuClose}>
                      <AiOutlineClose className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Menu Navigation */}
                  <nav>
                    <ul className="space-y-4">
                     
                       <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="/" className="nav-link"> Our Services</Link>
            </li>
            <li>
              <Link href="/" className="nav-link">About Us</Link>
            </li>
            <li>
              <Link href="/" className="nav-link"> Contact Us </Link>
            </li>
          </ul>
                    
                  </nav>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
export default Navbar;