import Image from 'next/image';
import React from 'react';

const TeamsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet the Nexus AI Team</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Nexus AI, our success is driven by our talented and dedicated team. Explore the dynamic mix of innovation, collaboration, and expertise that drives us forward.
          </p>
        </div>
      </section>

      {/* Leadership Team - Zigzag Layout */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Leadership Team</h2>

        {/* Leadership Member: Adi Nugroho */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <Image
            src="/Adi_Nugroho.webp" // Replace with actual image path
            alt="Adi Nugroho"
            className="w-full h-72 md:w-96 md:h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
          <div className="text-left md:pl-8">
            <h3 className="text-4xl font-bold text-gray-800">Adi Nugroho</h3>
            <p className="text-indigo-600 font-semibold">Founder & CEO</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expertise: AI Strategy, Business Development, Software Engineering. Adi founded Nexus AI in 2020 with a mission to help Indonesian businesses embrace AI technology. His leadership ensures Nexus AI remains a trailblazer in AI-driven innovation.
            </p>
            <div className="mt-4">
              <a href="mailto:adi@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/adinugroho" className="text-indigo-600 hover:text-indigo-800 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Member: Kartika Sari */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 bg-gray-200 p-8 rounded-lg shadow-lg md:flex-row-reverse">
          <Image
            src="/Kartika_Sari.webp" // Replace with actual image path
            alt="Kartika Sari"
            className="w-full h-72 md:w-96 md:h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
          <div className="text-left md:pr-8">
            <h3 className="text-4xl font-bold text-gray-800">Kartika Sari</h3>
            <p className="text-indigo-600 font-semibold">Chief Technology Officer (CTO)</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expertise: Machine Learning, Deep Learning, Software Development. Kartika drives the technology vision at Nexus AI, ensuring our AI solutions remain cutting-edge and scalable to meet the challenges of tomorrow.
            </p>
            <div className="mt-4">
              <a href="mailto:kartika@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/kartikasari" className="text-indigo-600 hover:text-indigo-800 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Member: Budi Santoso */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <Image
            src="/Budi_Santoso.webp" // Replace with actual image path
            alt="Budi Santoso"
            className="w-72 h-72 md:w-96 md:h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
          <div className="text-left md:pl-8">
            <h3 className="text-4xl font-bold text-gray-800">Budi Santoso</h3>
            <p className="text-indigo-600 font-semibold">Chief Data Scientist</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expertise: Data Analytics, Predictive Modeling, Data Architecture. Budi leads the data science team at Nexus AI, helping businesses unlock the full potential of their data through advanced AI and machine learning models.
            </p>
            <div className="mt-4">
              <a href="mailto:budi@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/budisantoso" className="text-indigo-600 hover:text-indigo-800 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Member: Rina Wijaya */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 bg-gray-200 p-8 rounded-lg shadow-lg md:flex-row-reverse">
          <Image
            src="" // Replace with actual image path
            alt="Rina Wijaya"
            className="w-full h-72 md:w-96 md:h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
          <div className="text-left md:pr-8">
            <h3 className="text-4xl font-bold text-gray-800">Rina Wijaya</h3>
            <p className="text-indigo-600 font-semibold">Head of AI Consulting</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expertise: AI Strategy, Technology Consulting, Digital Transformation. Rina works closely with clients to craft AI roadmaps that align with their goals, ensuring seamless AI integration and digital transformation.
            </p>
            <div className="mt-4">
              <a href="mailto:rina@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/rinawijaya" className="text-indigo-600 hover:text-indigo-800 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Teguh Pratama */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="" // Replace with actual image path
                alt="Teguh Pratama"
                className="w-40 h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-6 object-cover transform hover:scale-105 transition duration-300"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Teguh Pratama</h3>
                <p className="text-indigo-600 font-semibold">Senior AI Engineer</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Natural Language Processing, Computer Vision, AI System Architecture.
                </p>
                <div className="mt-4">
                  <a href="mailto:teguh@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More team members here... */}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, we are always looking for talented individuals passionate about AI future. Explore our open positions and join our innovative team.
          </p>
          <div className="mt-6">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Work with Us?</h2>
        <div className="text-center">
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
            At Nexus AI, our people are our greatest asset. We offer a dynamic, inclusive work environment where creativity and innovation are encouraged.
          </p>
          <ul className="mt-8 text-lg max-w-2xl mx-auto text-gray-700 space-y-4">
            <li>• Innovation-Driven: We push the boundaries of AI technology to deliver cutting-edge solutions.</li>
            <li>• Collaborative Environment: We believe in teamwork and knowledge sharing to create the best outcomes for our clients.</li>
            <li>• Continuous Learning: We provide opportunities for professional growth, training, and development.</li>
          </ul>
          <div className="mt-6">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
