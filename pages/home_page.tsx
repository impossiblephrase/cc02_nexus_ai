import React from 'react';
import Link from 'next/link';
import CompanyLogosBanner from '@/components/companies_banner';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section>
        <div>
          <Hero />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-32 bg-[#030014]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-serif font-bold text-gray-300">
            “We are on a mission to help businesses harness the power of AI to streamline processes, boost productivity, and create smarter, more scalable solutions.”
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-gray-600 max-w-lg md:max-w-3xl mx-auto text-base md:text-lg">
            Nexus AI was founded with a simple goal: to make artificial intelligence accessible and impactful for businesses of all sizes. We specialize in designing tailored AI solutions that solve real-world problems, from automating manual processes to predicting future trends through advanced analytics.
          </p>
          <p className="mt-4 text-gray-600 max-w-lg md:max-w-3xl mx-auto text-base md:text-lg">
            Since 2020, we have worked with companies across various industries, helping them optimize their operations, improve decision-making, and drive innovation. Based in Indonesia, our team of AI engineers, data scientists, and business strategists brings together deep technical expertise and industry knowledge.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold">Nexus AI in Numbers</h3>
              <ul className="mt-4 text-gray-600 space-y-2 text-base md:text-lg">
                <li>+50 Projects Delivered</li>
                <li>+10 Industries Served</li>
                <li>100% Client Satisfaction Rate</li>
              </ul>
              <Link href="/about-us">
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Services */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Our Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-lg md:max-w-2xl mx-auto text-base md:text-lg">
            At Nexus AI, we offer a range of AI-powered services designed to help businesses grow, innovate, and become more efficient. Each solution is crafted with cutting-edge technology and is tailored to the unique needs of our clients.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold">AI-Powered Automation</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Automate repetitive tasks and optimize workflows with intelligent AI systems that save time and resources.
              </p>
              <Link href="/services">
                <button className="mt-4 px-4 py-2 text-blue-600 hover:underline">
                  Learn More
                </button>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold">Data Analytics & Insights</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Unlock the power of your data with predictive analytics and actionable insights that drive smarter decision-making.
              </p>
              <Link href="/services">
                <button className="mt-4 px-4 py-2 text-blue-600 hover:underline">
                  Learn More
                </button>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold">Natural Language Processing</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Improve customer interactions, from chatbots to language translation, using advanced NLP models.
              </p>
              <Link href="/services">
                <button className="mt-4 px-4 py-2 text-blue-600 hover:underline">
                  Learn More
                </button>
              </Link>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold">Computer Vision Solutions</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Harness the power of AI for image recognition, object detection, and video analytics to enhance operational efficiency.
              </p>
              <Link href="/services">
                <button className="mt-4 px-4 py-2 text-blue-600 hover:underline">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <Link href="/services">
            <button className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
              View All Services
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                “Nexus AI has transformed our business. Their AI solutions have helped us automate time-consuming tasks, and the efficiency gains are incredible. Highly recommend their services!”
              </p>
              <div className="mt-4 font-semibold text-blue-600">— Ahmad S., CEO of Tech Innovators</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                “The team at Nexus AI is professional, innovative, and truly understands our needs. Their data analytics solution has been a game-changer for us.”
              </p>
              <div className="mt-4 font-semibold text-blue-600">— Dian R., Head of Operations at Global Ventures</div>
            </div>
          </div>
          <Link href="/testimonials">
            <button className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
              Read More Testimonials
            </button>
          </Link>
        </div>
      </section>

      <CompanyLogosBanner />

    </div>
  );
};

export default HomePage;
