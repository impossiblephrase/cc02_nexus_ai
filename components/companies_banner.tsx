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
            <Image src="" alt="Company 1 Logo"  
            width={300}
            height={300} />
            <Image src="" alt="Company 2 Logo"  
            width={300}
            height={300} />
            <Image src="" alt="Company 3 Logo"  
            width={300}
            height={300} />
            <Image src="" alt="Company 4 Logo"  
            width={300}
            height={300} />
            <Image src="" alt="Company 5 Logo"  
            width={300}
            height={300} />
            <Image src="" alt="Company 6 Logo"  
            width={300}
            height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosBanner;
