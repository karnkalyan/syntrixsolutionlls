// FIX: Create the AboutPage component.
import React from 'react';
import PageHero from '../components/PageHero';
import WhyUs from '../components/WhyUs';
import Results from '../components/Results';
import CallToAction from '../components/CallToAction';
import { TEAM_MEMBERS } from '../constants';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="About Syntrix Solutions LLC"
        subtitle="We are a passionate team of developers, designers, and strategists dedicated to building exceptional digital products."
      />
      
      <WhyUs />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-red-500 font-bold mb-2 tracking-wider">OUR EXPERTS</p>
            <div className="w-10 h-1 bg-red-500 mb-4 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Meet Our Engineering & Ops Team</h2>
            <p className="text-lg text-gray-600 mt-4">The certified developers, architects, and security leaders behind Syntrix Solutions LLC.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div 
                key={member.id} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Active Status Badge */}
                <div className="absolute top-4 right-4 bg-green-50 text-green-700 text-[10px] font-extrabold px-3 py-1 rounded-full border border-green-200 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Active Lead</span>
                </div>

                {/* Profile Avatar Container */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#EF233C] to-[#F98829] shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#2B2B2B]">{member.name}</h3>
                <p className="text-red-500 font-bold text-xs uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{member.bio}</p>

                {/* Team Leadership Credentials */}
                <div className="mt-auto w-full pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">Syntrix Certified</span>
                  <span className="text-[#D52036] font-semibold hover:underline cursor-pointer">View Profile &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Results />
      <CallToAction />
    </>
  );
};

export default AboutPage;
