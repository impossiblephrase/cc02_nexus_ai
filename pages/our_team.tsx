// TeamsPage.tsx
import React from 'react';
import TeamMembers, { TeamMember } from '@/components/TeamMember';

const leadershipTeam: TeamMember[] = [
  {
    name: 'Adi Nugroho',
    title: 'Founder & CEO',
    expertise:
      'Expertise: AI Strategy, Business Development, Software Engineering. Adi founded Nexus AI in 2020, driven by a mission to help Indonesian businesses embrace AI technology.',
    email: 'adi@nexusai.com',
    linkedin: 'https://www.linkedin.com/in/adinugroho',
    imageSrc: '/team_members/Adi_Nugroho.webp',
  },
  {
    name: 'Kartika Sari',
    title: 'Chief Technology Officer (CTO)',
    expertise:
      'Expertise: Machine Learning, Deep Learning, Software Development. Kartika leads Nexus AI technological innovation to ensure that our AI solutions remain cutting-edge.',
    email: 'kartika@nexusai.com',
    linkedin: 'https://www.linkedin.com/in/kartikasari',
    imageSrc: '/team_members/Kartika_Sari.webp',
  },
  {
    name: 'Budi Santoso',
    title: 'Chief Data Scientist',
    expertise:
      'Expertise: Data Analytics, Predictive Modeling, Data Architecture. Budi helps businesses turn raw data into actionable insights through advanced analytics.',
    email: 'budi@nexusai.com',
    linkedin: 'https://www.linkedin.com/in/budisantoso',
    imageSrc: '/team_members/Budi_Santoso.webp',
  },
  {
    name: 'Rina Wijaya',
    title: 'Head of AI Consulting',
    expertise:
      'Expertise: AI Strategy, Technology Consulting, Digital Transformation. Rina ensures seamless AI implementation and digital transformation for clients.',
    email: 'rina@nexusai.com',
    linkedin: 'https://www.linkedin.com/in/rinawijaya',
    imageSrc: '/team_members/Rina_Wijaya.webp',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Teguh Pratama',
    title: 'Senior AI Engineer',
    expertise:
      'Expertise: Natural Language Processing, Computer Vision, AI System Architecture.',
    email: 'teguh@nexusai.com',
    imageSrc: '/team_members/Teguh_Pratama.webp',
  },
  {
    name: 'Putri Anggraini',
    title: 'Data Scientist',
    expertise: 'Expertise: Data Analytics, Machine Learning, Business Intelligence.',
    email: 'putri@nexusai.com',
    imageSrc: '/team_members/Putri_Anggraini.webp',
  },
  {
    name: 'Ari Wibowo',
    title: 'Software Engineer',
    expertise: 'Expertise: Full-Stack Development, AI Integration, Cloud Computing.',
    email: 'ari@nexusai.com',
    imageSrc: '/team_members/Ari_Wibowo.webp',
  },
  {
    name: 'Joko Hendarto',
    title: 'AI Hardware Engineer',
    expertise: 'Expertise: AI Hardware Integration, IoT, Robotics.',
    email: 'joko@nexusai.com',
    imageSrc: '/team_members/Joko_Hendarto.webp',
  },
  {
    name: 'Dewi Susanti',
    title: 'UX/UI Designer',
    expertise: 'Expertise: User Experience Design, User Interface Design, AI-Driven Interfaces.',
    email: 'dewi@nexusai.com',
    imageSrc: '/team_members/Dewi.webp',
  },
  {
    name: 'Rama Kurniawan',
    title: 'Cloud AI Architect',
    expertise: 'Expertise: Cloud Computing, AI Integration, Scalable Infrastructure.',
    email: 'rama@nexusai.com',
    imageSrc: '/team_members/Rama_Kurniawan.webp',
  },
];

const TeamsPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#030014] to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Nexus AI Team</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            At Nexus AI, our success is driven by our talented and dedicated team. Explore the dynamic mix of innovation, collaboration, and expertise that drives us forward.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamMembers members={leadershipTeam} heading="Leadership Team" isLeadership={true} />

      {/* Team Members Section */}
      <TeamMembers members={teamMembers} heading="Our Team Members" />

      {/* Join Our Team */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-32 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
            At Nexus AI, we are always looking for talented individuals passionate about AI future. Explore our open positions and join our innovative team.
          </p>
          <div className="mt-6">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-24 md:py-16 container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Why Work with Us?</h2>
        <div className="text-center">
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700">
            At Nexus AI, our people are our greatest asset. We offer a dynamic, inclusive work environment where creativity and innovation are encouraged.
          </p>
          <ul className="mt-8 text-sm md:text-lg max-w-2xl mx-auto text-gray-700 space-y-4">
            <li>• Innovation-Driven: We push the boundaries of AI technology to deliver cutting-edge solutions.</li>
            <li>• Collaborative Environment: We believe in teamwork and knowledge sharing to create the best outcomes for our clients.</li>
            <li>• Continuous Learning: We provide opportunities for professional growth, training, and development.</li>
          </ul>
          <div className="mt-6">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
