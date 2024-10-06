import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Empowering Businesses with AI-Driven Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            At Nexus AI, we combine cutting-edge artificial intelligence with industry expertise to unlock new growth opportunities for your business. Transform the way you operate with intelligent automation, data-driven insights, and future-proof AI technology.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          {/* Add an image or video for the hero section */}
          <img
            src="/images/hero-image.jpg"
            alt="Innovation and AI technology"
            className="w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-semibold italic text-gray-800">
            “We are on a mission to help businesses harness the power of AI to streamline processes, boost productivity, and create smarter, more scalable solutions.”
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Nexus AI was founded with a simple goal: to make artificial intelligence accessible and impactful for businesses of all sizes. We specialize in designing tailored AI solutions that solve real-world problems, from automating manual processes to predicting future trends through advanced analytics.
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Since 2020, we have worked with companies across various industries, helping them optimize their operations, improve decision-making, and drive innovation. Based in Indonesia, our team of AI engineers, data scientists, and business strategists brings together deep technical expertise and industry knowledge.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-2xl font-semibold">Nexus AI in Numbers</h3>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>+50 Projects Delivered</li>
                <li>+10 Industries Served</li>
                <li>100% Client Satisfaction Rate</li>
              </ul>
              <Link href="/about">
                <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Nexus AI, we offer a range of AI-powered services designed to help businesses grow, innovate, and become more efficient. Each solution is crafted with cutting-edge technology and is tailored to the unique needs of our clients.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">AI-Powered Automation</h3>
              <p className="mt-2 text-gray-600">
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
              <h3 className="text-xl font-semibold">Data Analytics & Insights</h3>
              <p className="mt-2 text-gray-600">
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
              <h3 className="text-xl font-semibold">Natural Language Processing</h3>
              <p className="mt-2 text-gray-600">
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
              <h3 className="text-xl font-semibold">Computer Vision Solutions</h3>
              <p className="mt-2 text-gray-600">
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
            <button className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View All Services
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                “Nexus AI has transformed our business. Their AI solutions have helped us automate time-consuming tasks, and the efficiency gains are incredible. Highly recommend their services!”
              </p>
              <div className="mt-4 font-semibold text-blue-600">— Ahmad S., CEO of Tech Innovators</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                “The team at Nexus AI is professional, innovative, and truly understands our needs. Their data analytics solution has been a game-changer for us.”
              </p>
              <div className="mt-4 font-semibold text-blue-600">— Dian R., Head of Operations at Global Ventures</div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                “Thanks to Nexus AI’s expertise, we’ve been able to implement AI-powered systems that have greatly improved our customer service and operational workflows.”
              </p>
              <div className="mt-4 font-semibold text-blue-600">— Dwi K., CTO of Smart Solutions Inc.</div>
            </div>
          </div>
          <Link href="/testimonials">
            <button className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Read More Testimonials
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
