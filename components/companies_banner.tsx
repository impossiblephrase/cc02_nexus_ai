import React from 'react';
import Image from 'next/image';

const CompanyLogosBanner = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Trusted by Leading Companies</h2>

        {/* Logo Wrapper */}
        <div className="overflow-hidden">
          <div className="logos-slider flex items-center justify-center space-x-8 animate-scroll">
            {/* Add logos here */}
            <Image src="/images/logo1.png" alt="Company 1 Logo" className="h-20 w-auto object-contain" />
            <Image src="/images/logo2.png" alt="Company 2 Logo" className="h-20 w-auto object-contain" />
            <Image src="/images/logo3.png" alt="Company 3 Logo" className="h-20 w-auto object-contain" />
            <Image src="/images/logo4.png" alt="Company 4 Logo" className="h-20 w-auto object-contain" />
            <Image src="/images/logo5.png" alt="Company 5 Logo" className="h-20 w-auto object-contain" />
            <Image src="/images/logo6.png" alt="Company 6 Logo" className="h-20 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosBanner;
