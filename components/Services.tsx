import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <motion.div 
        className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group overflow-hidden cursor-pointer"
        whileHover={{ y: -8 }}
    >
        {/* Gradient Background that animates in */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EF233C] to-[#F98829] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        <div className="absolute bottom-20 right-8 w-24 h-24 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 flex-shrink-0 p-4 bg-[#FFF1F2] group-hover:bg-white/10 rounded-full self-start transition-all duration-300">
                <service.icon className="h-10 w-10 text-[#D52036] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-[#2B2B2B] group-hover:text-white mb-3 transition-colors duration-300">{service.title}</h3>
            <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed flex-grow transition-colors duration-300">{service.description}</p>
        </div>
    </motion.div>
);


const Services: React.FC = () => {
  return (
    <motion.section 
      id="services" 
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-red-500 font-bold mb-2 tracking-wider">OUR SERVICES</p>
            <div className="w-10 h-1 bg-red-500 mb-4 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">What we can do for your business</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;