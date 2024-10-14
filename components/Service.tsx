"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

interface Service {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  testimonial: string;
  image: string;
  alt: string;
}

interface ServiceItemProps {
  service: Service;
  reverse?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, reverse = false }) => {
  const {
    title,
    description,
    features,
    pricing,
    testimonial,
    image,
    alt,
  } = service;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 bg-gray-300 p-6 md:p-12 lg:p-20 rounded-lg shadow-2xl w-full ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h3>
        <p className="mt-4 text-sm md:text-base text-gray-600">{description}</p>
        <ul className="mt-4 text-sm md:text-base text-gray-600 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
        <p className="mt-4 font-semibold text-gray-800">{pricing}</p>
        <p className="mt-4 italic text-gray-500">{testimonial}</p>
        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <button
            onClick={openModal}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-lime-500 hover:text-white transition w-full md:w-auto">
            Apply Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover:border-gray-300 transition w-full md:w-auto">
            More Details
          </button>
        </div>

      </div>
  
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src={image}
          width={400}
          height={400}
          alt={alt}
          className="rounded-lg shadow-lg m-auto"
        />
      </div>
  
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
  
};

export default ServiceItem;

// bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-lime-500 hover:text-white transition
