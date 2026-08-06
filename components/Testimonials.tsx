import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <motion.section 
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-red-500 font-bold mb-2">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Work Well Together</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative h-64">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                <img src={item.avatar} alt={item.author} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#EF233C] shadow-lg" />
                <p className="text-gray-600 text-xl italic mb-6">"{item.quote}"</p>
                <div>
                    <p className="font-bold text-[#2B2B2B] text-xl">{item.author}</p>
                    <p className="text-gray-500">{item.company}</p>
                </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-[#EF233C]' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                ></button>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;