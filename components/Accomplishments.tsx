import React from 'react';
import { ACCOMPLISHMENTS } from '../constants';
import { Accomplishment } from '../types';
import { motion } from 'framer-motion';

const AccomplishmentCard: React.FC<{ item: Accomplishment }> = ({ item }) => (
    <motion.div 
      className="bg-gray-50/50 rounded-2xl p-6 w-full sm:w-auto flex-1 flex flex-col items-center text-center border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
    >
        <div className="mb-4 inline-block p-4 bg-red-100 rounded-full">
            <item.icon className="h-8 w-8 text-[#EF233C]" />
        </div>
        <h3 className="text-lg font-bold text-[#2B2B2B]">{item.name}</h3>
    </motion.div>
);


const Accomplishments: React.FC = () => {
  return (
    <motion.section 
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Our Accomplishments</h2>
           <p className="text-lg text-gray-600 mt-4">Recognized for our commitment to excellence and innovation.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {ACCOMPLISHMENTS.map((item) => (
            <AccomplishmentCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Accomplishments;
