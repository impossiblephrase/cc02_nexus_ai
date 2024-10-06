import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Our Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Nexus AI, we offer a range of AI-powered services tailored to meet the specific needs of businesses across industries. Our solutions are designed to help you optimize your operations, improve decision-making, and unlock new growth opportunities.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Service 1: AI-Powered Automation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">AI-Powered Automation</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Automate repetitive, time-consuming tasks and streamline your business operations with our AI automation tools. Our systems help you reduce manual errors, speed up processes, and save valuable time, allowing your team to focus on more strategic work.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• Workflow automation for business processes</li>
            <li>• AI-powered decision-making tools</li>
            <li>• Integration with existing software and platforms</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Starting at $2,500 per implementation. Custom pricing available for enterprise-level solutions.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "The automation solution from Nexus AI reduced our manual work by 50%, allowing us to focus more on growing the business." — Rama A., Operations Manager at IndoLogistics
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Get Started with Automation
              </button>
            </Link>
          </div>
        </div>

        {/* Service 2: Data Analytics & Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">Data Analytics & Insights</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Unlock the full potential of your data with our advanced analytics and machine learning models. We provide predictive insights that help you make smarter business decisions, understand customer behavior, and forecast future trends.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• Predictive analytics for sales, customer trends, and market behavior</li>
            <li>• Custom dashboards with real-time data visualization</li>
            <li>• AI-driven reports to support decision-making</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Starting at $1,800 per month for analytics as a service. Contact us for custom packages.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "The insights we gained from Nexus AI’s analytics tools have significantly improved our decision-making." — Siti R., CEO of RetailHub
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Learn More about Data Insights
              </button>
            </Link>
          </div>
        </div>

        {/* Service 3: Natural Language Processing (NLP) */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">Natural Language Processing (NLP)</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Enhance your customer experience with advanced Natural Language Processing (NLP) solutions. From AI-powered chatbots to automated language translation, our NLP models are designed to process and understand human language, making interactions smoother and more personalized.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• AI chatbots for customer support</li>
            <li>• Automated text analysis for sentiment and trends</li>
            <li>• Language translation and voice recognition systems</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Custom pricing based on project size and complexity. Contact us for a quote.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "Nexus AI’s chatbot transformed our customer service operations. It handles thousands of inquiries daily, saving us both time and money." — Eka P., Head of Customer Support at TokoLaris
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Explore NLP Solutions
              </button>
            </Link>
          </div>
        </div>

        {/* Service 4: Computer Vision Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">Computer Vision Solutions</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Harness the power of AI to interpret and understand visual data with our cutting-edge computer vision solutions. From object detection to facial recognition, our AI systems can process and analyze images and videos to improve business efficiency.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• Object detection and image classification</li>
            <li>• Facial recognition for security and identification</li>
            <li>• Video analytics for tracking and monitoring</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Starting at $5,000 per project, with flexible pricing for long-term implementations.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "With Nexus AI’s computer vision tools, we’ve improved our security systems and enhanced customer experiences at our retail stores." — Asep B., Head of IT at SuperMart
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Get a Demo of Our Vision Solutions
              </button>
            </Link>
          </div>
        </div>

        {/* Service 5: AI Consulting & Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">AI Consulting & Strategy</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Not sure how AI can benefit your business? Our team of AI experts offers consulting services to help you develop and implement AI strategies tailored to your unique needs.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• AI strategy development and planning</li>
            <li>• Hands-on support for AI integration and deployment</li>
            <li>• Ongoing consultation for AI optimization</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Consultation packages start at $3,000 for strategy development. Hourly rates for ongoing consulting available.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "Nexus AI’s consulting services helped us create a clear AI roadmap, which has been essential in streamlining our operations and improving efficiency." — Andi K., CTO of MediHealth Group
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Service 6: Custom AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">Custom AI Solutions</h2>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Every business is unique, and so are its challenges. That’s why we offer custom AI solutions tailored to your specific requirements.
          </p>
          <ul className="mt-4 text-gray-700 max-w-2xl mx-auto">
            <li>• End-to-end AI development for custom projects</li>
            <li>• Integration with existing platforms and workflows</li>
            <li>• Custom machine learning models built for your business needs</li>
          </ul>
          <p className="mt-4 text-gray-700 text-center">
            Pricing: Custom pricing based on the project scope.
          </p>
          <blockquote className="mt-6 italic text-gray-600 text-center">
            "The custom AI solution developed by Nexus AI has been a game-changer for us." — Bambang S., CEO of NextGen Technologies
          </blockquote>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Contact Us for a Custom Solution
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Nexus AI is here to help you navigate the future with innovative AI solutions. Whether you’re looking to automate processes, gain insights from data, or enhance customer interactions, our products and services are designed to give your business a competitive edge.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
