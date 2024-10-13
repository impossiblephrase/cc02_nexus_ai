"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import Modal from './Modal';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-[#030014] fixed top-0 left-0 right-0 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and text beside each other */}
        <div className="flex items-center space-x-2 text-white text-xl font-bold">
          {/* Logo beside the text */}
          <Link href="/" passHref>
            <Image 
              src="/nexus/nexus.png"
              alt="logo"
              width={30}
              height={30}
              className="object-cover cursor-pointer"
            />
          </Link>
          <Link href="/" passHref className='font-serif font-extrabold'>
            Nexus
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white font-bold text-sm hover:text-gray-200">
            Home
          </Link>
          <Link href="/about-us" className="text-white font-bold text-sm hover:text-gray-200">
            About Us
          </Link>
          <Link href="/services" className="text-white font-bold text-sm hover:text-gray-200">
            Services
          </Link>
          <Link href="/teams" className="text-white font-bold text-sm hover:text-gray-200">
            Our Team
          </Link>
          <button onClick={openModal} className="text-white font-bold text-sm hover:text-gray-200">
            Contact Us
          </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 bg-[#030014]">
            <a href="/" className="text-white font-bold hover:text-gray-200">
              Home
            </a>
            <a href="/about-us" className="text-white font-bold hover:text-gray-200">
              About Us
            </a>
            <a href="/services" className="text-white font-bold hover:text-gray-200">
              Services
            </a>
            <a href="/teams" className="text-white font-bold hover:text-gray-200">
              Teams
            </a>
            <button onClick={openModal} className="text-white font-bold hover:text-gray-200">
              Contact Us
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
