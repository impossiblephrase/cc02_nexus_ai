import React from 'react';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Nexus AI, we offer a range of AI-powered services tailored to meet the specific needs of businesses across industries.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>

        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">AI-Powered Automation</h3>
            <p className="mt-4 text-gray-600">
              Automate repetitive, time-consuming tasks and streamline your business operations with our AI automation tools.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Workflow automation for business processes</li>
              <li>• AI-powered decision-making tools</li>
              <li>• Integration with existing software and platforms</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Starting at $2,500 per implementation</p>
            <p className="mt-4 italic text-gray-500">
              "The automation solution from Nexus AI reduced our manual work by 50%, allowing us to focus more on growing the business."
              — Rama A., Operations Manager at IndoLogistics
            </p>
          </div>
          <div>
            <Image
              src="" // Add appropriate image path
              alt="AI-Powered Automation"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              src="" // Add appropriate image path
              alt="Data Analytics & Insights"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Data Analytics & Insights</h3>
            <p className="mt-4 text-gray-600">
              Unlock the full potential of your data with our advanced analytics and machine learning models.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Predictive analytics for sales, customer trends, and market behavior</li>
              <li>• Custom dashboards with real-time data visualization</li>
              <li>• AI-driven reports to support decision-making</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Starting at $1,800 per month</p>
            <p className="mt-4 italic text-gray-500">
              "The insights we gained from Nexus AI analytics tools have significantly improved our decision-making."
              — Siti R., CEO of RetailHub
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Natural Language Processing (NLP)</h3>
            <p className="mt-4 text-gray-600">
              Enhance your customer experience with advanced Natural Language Processing (NLP) solutions.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• AI chatbots for customer support</li>
              <li>• Automated text analysis for sentiment and trends</li>
              <li>• Language translation and voice recognition systems</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Custom pricing based on project size and complexity</p>
            <p className="mt-4 italic text-gray-500">
              "Nexus AI chatbot transformed our customer service operations. It handles thousands of inquiries daily."
              — Eka P., Head of Customer Support at TokoLaris
            </p>
          </div>
          <div>
            <Image
              src="" // Add appropriate image path
              alt="Natural Language Processing"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              src="" // Add appropriate image path
              alt="Computer Vision Solutions"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Computer Vision Solutions</h3>
            <p className="mt-4 text-gray-600">
              Harness the power of AI to interpret and understand visual data with our cutting-edge computer vision solutions.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Object detection and image classification</li>
              <li>• Facial recognition for security and identification</li>
              <li>• Video analytics for tracking and monitoring</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Starting at $5,000 per project</p>
            <p className="mt-4 italic text-gray-500">
              "With Nexus AI computer vision tools, we have improved our security systems and enhanced customer experiences."
              — Asep B., Head of IT at SuperMart
            </p>
          </div>
        </div>

        {/* Service 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">AI Consulting & Strategy</h3>
            <p className="mt-4 text-gray-600">
              Our team of AI experts offers consulting services to help you develop and implement AI strategies tailored to your unique needs.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• AI strategy development and planning</li>
              <li>• Hands-on support for AI integration and deployment</li>
              <li>• Ongoing consultation for AI optimization</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Consultation packages start at $3,000</p>
            <p className="mt-4 italic text-gray-500">
              "Nexus AI consulting services helped us create a clear AI roadmap, streamlining our operations."
              — Andi K., CTO of MediHealth Group
            </p>
          </div>
          <div>
            <Image
              src="" // Add appropriate image path
              alt="AI Consulting & Strategy"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              src="" // Add appropriate image path
              alt="Custom AI Solutions"
              width={195}
              height={195}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Custom AI Solutions</h3>
            <p className="mt-4 text-gray-600">
              We offer custom AI solutions tailored to your specific requirements, from fully customized AI platforms to integrations with existing systems.
            </p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• End-to-end AI development for custom projects</li>
              <li>• Integration with existing platforms and workflows</li>
              <li>• Custom machine learning models built for your business needs</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">Pricing: Custom pricing based on project scope</p>
            <p className="mt-4 italic text-gray-500">
              "The custom AI solution developed by Nexus AI has been a game-changer for us."
              — Bambang S., CEO of NextGen Technologies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
