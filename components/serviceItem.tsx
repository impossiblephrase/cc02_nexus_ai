import React from 'react';
import Image from 'next/image';

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

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div>
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        <ul className="mt-4 text-gray-600 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
        <p className="mt-4 font-semibold text-gray-800">{pricing}</p>
        <p className="mt-4 italic text-gray-500">{testimonial}</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
      <div>
        <Image
          src={image} // Ensure the image paths are correct
          alt={alt}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ServiceItem;
