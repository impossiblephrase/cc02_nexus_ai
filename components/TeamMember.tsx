// TeamMembers.tsx
import React from 'react';
import Image from 'next/image';

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
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${isLeadership ? 'text-blue-800' : 'text-gray-800'}`}>
        {heading}
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-${isLeadership ? '2' : '2 lg:grid-cols-2'} gap-8 md:gap-12`}>
        {members.map((member, index) => (
          <div
            key={index}
            className={`p-6 md:p-8 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ${isLeadership ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={isLeadership ? 250 : 180}
                height={isLeadership ? 250 : 180}
                className="rounded-full shadow-2xl mb-6 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-left">
                <h3 className={`text-xl md:text-2xl font-bold ${isLeadership ? 'text-gray-800' : 'text-gray-700'}`}>
                  {member.name}
                </h3>
                <p className={`font-semibold ${isLeadership ? 'text-blue-800' : 'text-indigo-500'}`}>{member.title}</p>
                <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {member.expertise}
                </p>
                <div className="mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-800 hover:text-indigo-800 underline"
                  >
                    Email
                  </a>
                  {member.linkedin && (
                    <>
                      <br />
                      <a
                        href={member.linkedin}
                        className="text-blue-800 hover:text-indigo-800 underline"
                      >
                        LinkedIn
                      </a>
                    </>
                  )}
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
