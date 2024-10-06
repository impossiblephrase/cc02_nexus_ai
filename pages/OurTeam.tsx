import React from 'react';

const TeamsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Meet the Nexus AI Team</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, we believe that our success is driven by the incredible talent and dedication of our team. Each member brings a unique set of skills and experiences to the table, creating a dynamic environment of innovation, collaboration, and continuous learning.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Adi Nugroho */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/adi-nugroho.jpg" // Replace with actual image paths
              alt="Adi Nugroho"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Adi Nugroho</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="mt-4 text-gray-700">
              Expertise: AI Strategy, Business Development, Software Engineering
            </p>
            <p className="mt-2 text-gray-500">
              As the visionary behind Nexus AI, Adi founded the company in 2020 with the goal of helping Indonesian businesses embrace AI technology.
            </p>
            <div className="mt-4">
              <a href="mailto:adi@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/adinugroho" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Kartika Sari */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/kartika-sari.jpg" // Replace with actual image paths
              alt="Kartika Sari"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Kartika Sari</h3>
            <p className="text-gray-600">Chief Technology Officer (CTO)</p>
            <p className="mt-4 text-gray-700">
              Expertise: Machine Learning, Deep Learning, Software Development
            </p>
            <p className="mt-2 text-gray-500">
              Kartika leads Nexus AI's technological innovation, ensuring that our AI solutions remain at the cutting edge.
            </p>
            <div className="mt-4">
              <a href="mailto:kartika@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/kartikasari" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Budi Santoso */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/budi-santoso.jpg" // Replace with actual image paths
              alt="Budi Santoso"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Budi Santoso</h3>
            <p className="text-gray-600">Chief Data Scientist</p>
            <p className="mt-4 text-gray-700">
              Expertise: Data Analytics, Predictive Modeling, Data Architecture
            </p>
            <p className="mt-2 text-gray-500">
              Budi brings years of experience in data science and analytics, helping businesses turn raw data into actionable insights.
            </p>
            <div className="mt-4">
              <a href="mailto:budi@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/budisantoso" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Rina Wijaya */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/rina-wijaya.jpg" // Replace with actual image paths
              alt="Rina Wijaya"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Rina Wijaya</h3>
            <p className="text-gray-600">Head of AI Consulting</p>
            <p className="mt-4 text-gray-700">
              Expertise: AI Strategy, Technology Consulting, Digital Transformation
            </p>
            <p className="mt-2 text-gray-500">
              Rina leads our AI consulting practice, guiding clients through the digital transformation process.
            </p>
            <div className="mt-4">
              <a href="mailto:rina@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/rinawijaya" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Teguh Pratama */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/teguh-pratama.jpg" // Replace with actual image paths
              alt="Teguh Pratama"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Teguh Pratama</h3>
            <p className="text-gray-600">Senior AI Engineer</p>
            <p className="mt-4 text-gray-700">
              Expertise: Natural Language Processing, Computer Vision, AI System Architecture
            </p>
            <div className="mt-4">
              <a href="mailto:teguh@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
            </div>
          </div>

          {/* Putri Anggraini */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/putri-anggraini.jpg" // Replace with actual image paths
              alt="Putri Anggraini"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Putri Anggraini</h3>
            <p className="text-gray-600">Data Scientist</p>
            <p className="mt-4 text-gray-700">
              Expertise: Data Analytics, Machine Learning, Business Intelligence
            </p>
            <div className="mt-4">
              <a href="mailto:putri@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
            </div>
          </div>

          {/* Ari Wibowo */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/ari-wibowo.jpg" // Replace with actual image paths
              alt="Ari Wibowo"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Ari Wibowo</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="mt-4 text-gray-700">
              Expertise: Full-Stack Development, AI Integration, Cloud Computing
            </p>
            <div className="mt-4">
              <a href="mailto:ari@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
            </div>
          </div>

          {/* Siti Nurhaliza */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/siti-nurhaliza.jpg" // Replace with actual image paths
              alt="Siti Nurhaliza"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Siti Nurhaliza</h3>
            <p className="text-gray-600">Customer Success Manager</p>
            <p className="mt-4 text-gray-700">
              Expertise: Client Relations, AI Implementation, Project Management
            </p>
            <div className="mt-4">
              <a href="mailto:siti@nexusai.com" className="text-blue-600 underline">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, we are always looking for talented and driven individuals who are passionate about the future of AI. If you’re interested in joining our team, explore our open positions and be a part of a collaborative, innovative environment.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Work with Us?</h2>
        <div className="text-center">
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, our people are our greatest asset. We offer a dynamic, inclusive work environment where creativity and innovation are encouraged. Whether you’re an AI engineer, a data scientist, or a strategist, you’ll find a place here to grow, learn, and make an impact.
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
