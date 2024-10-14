// TeamMembers.tsx
import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { RxGithubLogo, RxLinkedinLogo, } from "react-icons/rx";



interface TeamMember {
  name: string;
  title: string;
  expertise: string;
  email: string;
  linkedin?: string;
  imageSrc: string;
  
}

interface TeamMembersProps {
  members: TeamMember[];
  heading: string;
  isLeadership?: boolean; // New prop to differentiate styling
  
}

const TeamMembers: React.FC<TeamMembersProps> = ({ members, heading, isLeadership = false }) => {
  return (
    <section className={`py-12 md:py-16 container mx-auto px-4 sm:px-6 ${isLeadership ? 'bg-gray-100' : ''}`}>
      <h2 className={`text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 ${isLeadership ? 'text-blue-800' : 'text-gray-800'}`}>
        {heading}
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12`}>
        {members.map((member, index) => (
          <div
            key={index}
            className={`p-6 md:p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ${isLeadership ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={isLeadership ? 200 : 180}
                height={isLeadership ? 200 : 180}
                className="rounded-full shadow-2xl mb-6 sm:mb-0 sm:mr-6 object-cover"
              />
              <div className="flex-1">
                <h3 className={`text-lg md:text-2xl font-bold ${isLeadership ? 'text-gray-800' : 'text-gray-700'}`}>
                  {member.name}
                </h3>
                <p className={`font-semibold ${isLeadership ? 'text-blue-800' : 'text-blue-800'}`}>{member.title}</p>
                <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {member.expertise}
                </p>
                <div className="social-icons mt-4 flex justify-center sm:justify-start space-x-4">
                  <a aria-label="Email">
                    <EnvelopeIcon className="h-5 w-5 text-black cursor-pointer" />
                  </a>
                  <a aria-label="LinkedIn">
                    <RxLinkedinLogo className="h-5 w-5 text-black cursor-pointer" />
                  </a>
                  <a aria-label="GitHub">
                    <RxGithubLogo className="h-5 w-5 text-black cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
export type { TeamMember };
