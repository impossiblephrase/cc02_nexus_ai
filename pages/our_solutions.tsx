import React from 'react';
import ServiceItem from '@/components/Service';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI-Powered Automation',
      description:
        'Automate repetitive, time-consuming tasks and streamline your business operations with our AI automation tools.',
      features: [
        'Workflow automation for business processes',
        'AI-powered decision-making tools',
        'Integration with existing software and platforms',
      ],
      pricing: 'Starting at $2,500 per implementation',
      testimonial:
        '"The automation solution from Nexus AI reduced our manual work by 50%, allowing us to focus more on growing the business." — Rama A., Operations Manager at IndoLogistics',
      image: '/services/automation.jpg',
      alt: 'AI-Powered Automation',
    },
    {
      title: 'Data Analytics & Insights',
      description:
        'Unlock the full potential of your data with our advanced analytics and machine learning models.',
      features: [
        'Predictive analytics for sales, customer trends, and market behavior',
        'Custom dashboards with real-time data visualization',
        'AI-driven reports to support decision-making',
      ],
      pricing: 'Starting at $1,800 per month',
      testimonial:
        '"The insights we gained from Nexus AI analytics tools have significantly improved our decision-making." — Siti R., CEO of RetailHub',
      image: '/services/data_analytics.jpg', 
      alt: 'Data Analytics & Insights',
    },
    {
      title: 'Natural Language Processing (NLP)',
      description:
        'Enhance your customer experience with advanced Natural Language Processing (NLP) solutions.',
      features: [
        'AI chatbots for customer support',
        'Automated text analysis for sentiment and trends',
        'Language translation and voice recognition systems',
      ],
      pricing: 'Custom pricing based on project size and complexity',
      testimonial:
        '"Nexus AI chatbot transformed our customer service operations. It handles thousands of inquiries daily." — Eka P., Head of Customer Support at TokoLaris',
      image: '/services/nlp.webp', 
      alt: 'Natural Language Processing',
    },
    {
      title: 'Computer Vision Solutions',
      description:
        'Harness the power of AI to interpret and understand visual data with our cutting-edge computer vision solutions.',
      features: [
        'Object detection and image classification',
        'Facial recognition for security and identification',
        'Video analytics for tracking and monitoring',
      ],
      pricing: 'Starting at $5,000 per project',
      testimonial:
        '"With Nexus AI computer vision tools, we have improved our security systems and enhanced customer experiences." — Asep B., Head of IT at SuperMart',
      image: '/services/vision.jpeg', 
      alt: 'Computer Vision Solutions',
    },
    {
      title: 'AI Consulting & Strategy',
      description:
        'Our team of AI experts offers consulting services to help you develop and implement AI strategies tailored to your unique needs.',
      features: [
        'AI strategy development and planning',
        'Hands-on support for AI integration and deployment',
        'Ongoing consultation for AI optimization',
      ],
      pricing: 'Consultation packages start at $3,000',
      testimonial:
        '"Nexus AI consulting services helped us create a clear AI roadmap, streamlining our operations." — Andi K., CTO of MediHealth Group',
      image: '/services/ai_consulting.webp', 
      alt: 'AI Consulting & Strategy',
    },
    {
      title: 'Custom AI Solutions',
      description:
        'We offer custom AI solutions tailored to your specific requirements, from fully customized AI platforms to integrations with existing systems.',
      features: [
        'End-to-end AI development for custom projects',
        'Integration with existing platforms and workflows',
        'Custom machine learning models built for your business needs',
      ],
      pricing: 'Custom pricing based on project scope',
      testimonial:
        '"The custom AI solution developed by Nexus AI has been a game-changer for us." — Bambang S., CEO of NextGen Technologies',
      image: '/services/custom_ai.webp', 
      alt: 'Custom AI Solutions',
    },
  ];



  return (
    <div className="min-h-screen py-16  bg-gray-50">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#030014] to-blue-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Nexus AI, we offer a range of AI-powered services tailored to meet the specific needs of businesses across industries.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
