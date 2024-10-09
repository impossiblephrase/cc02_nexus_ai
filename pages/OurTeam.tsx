import React from 'react';
import Image from 'next/image';

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

      {/* Leadership Team */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Team Member Card */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Adi_Nugroho.webp" // Replace with actual image path
                alt="Adi Nugroho"
                width={250}
                height={250}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Adi Nugroho</h3>
                <p className="text-indigo-600 font-semibold">Founder & CEO</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: AI Strategy, Business Development, Software Engineering. Adi founded Nexus AI in 2020, driven by a mission to help Indonesian businesses embrace AI technology.
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
          </div>

          {/* Kartika Sari */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Kartika_Sari.webp" // Replace with actual image path
                alt="Kartika Sari"
                width={250}
                height={250}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Kartika Sari</h3>
                <p className="text-indigo-600 font-semibold">Chief Technology Officer (CTO)</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Machine Learning, Deep Learning, Software Development. Kartika leads Nexus AI's technological innovation to ensure that our AI solutions remain cutting-edge.
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
          </div>
        </div>

        {/* More leadership members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          {/* Budi Santoso */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Budi_Santoso.webp" // Replace with actual image path
                alt="Budi Santoso"
                width={250}
                height={250}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Budi Santoso</h3>
                <p className="text-indigo-600 font-semibold">Chief Data Scientist</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Data Analytics, Predictive Modeling, Data Architecture. Budi helps businesses turn raw data into actionable insights through advanced analytics.
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
          </div>

          {/* Rina Wijaya */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Rina_Wijaya.webp" // Replace with actual image path
                alt="Rina Wijaya"
                width={250}
                height={250}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Rina Wijaya</h3>
                <p className="text-indigo-600 font-semibold">Head of AI Consulting</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: AI Strategy, Technology Consulting, Digital Transformation. Rina ensures seamless AI implementation and digital transformation for clients.
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
                src="/Teguh_Pratama.webp" // Replace with actual image path
                alt="Teguh Pratama"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
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

          {/* Putri Anggraini */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Putri_Anggraini.webp" // Replace with actual image path
                alt="Putri Anggraini"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"              
                />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Putri Anggraini</h3>
                <p className="text-indigo-600 font-semibold">Data Scientist</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Data Analytics, Machine Learning, Business Intelligence.
                </p>
                <div className="mt-4">
                  <a href="mailto:putri@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ari Wibowo */}
          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Ari_Wibowo.webp" // Replace with actual image path
                alt="Ari Wibowo"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"              
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Ari Wibowo</h3>
                <p className="text-indigo-600 font-semibold">Software Engineer</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Full-Stack Development, AI Integration, Cloud Computing.
                </p>
                <div className="mt-4">
                  <a href="mailto:ari@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Joko_Hendarto.webp" // Replace with actual image path
                alt="Joko Hendarto"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"              
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Joko Hendarto</h3>
                <p className="text-indigo-600 font-semibold">AI Hardware Engineer</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: AI Hardware Integration, IoT, Robotics. Joko focuses on optimizing AI hardware for machine learning applications and robotics systems.
                </p>
                <div className="mt-4">
                  <a href="mailto:joko@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Dewi.webp" // Replace with actual image path
                alt="Dewi Susanti"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"              
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Dewi Susanti</h3>
                <p className="text-indigo-600 font-semibold">UX/UI Designer</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: User Experience Design, User Interface Design, AI-Driven Interfaces. Dewi ensures our AI solutions are user-friendly and visually appealing.
                </p>
                <div className="mt-4">
                  <a href="mailto:dewi@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/Rama_Kurniawan.webp" // Replace with actual image path
                alt="Rama Kurniawan"
                width={195}
                height={195}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"              
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800">Rama Kurniawan</h3>
                <p className="text-indigo-600 font-semibold">Cloud AI Architect</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Expertise: Cloud Computing, AI Integration, Scalable Infrastructure. Rama is responsible for deploying and managing AI systems on cloud platforms.
                </p>
                <div className="mt-4">
                  <a href="mailto:rama@nexusai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, we are always looking for talented individuals passionate about AI's future. Explore our open positions and join our innovative team.
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
