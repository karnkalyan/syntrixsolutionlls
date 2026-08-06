import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <motion.section 
      className="bg-white py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gray-50 rounded-2xl shadow-lg p-10 md:p-16 text-center max-w-4xl mx-auto border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] mb-4">
            Hiring remote dedicated developer from Syntrix Solutions LLC
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with our experts to discuss your project requirements and let's build something amazing together.
          </p>
          <motion.a 
            href="#/contact" 
            className="inline-block bg-[#D52036] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;