// FIX: Create the ServicesPage to display all services.
import React from 'react';
import type { Page, Service } from '../types';
import { SERVICES } from '../constants';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';

interface ServicesPageProps {
  setCurrentPage: (page: Page, slug?: string) => void;
}

const ServiceCard: React.FC<{ service: Service, onClick: () => void }> = ({ service, onClick }) => (
    <motion.div 
        className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group overflow-hidden cursor-pointer"
        whileHover={{ y: -8 }}
        onClick={onClick}
    >
        {service.imageUrl && (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4 flex items-center space-x-3">
                <div className="p-3 bg-red-100 rounded-xl">
                    <service.icon className="h-6 w-6 text-[#D52036]" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2B2B]">{service.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">{service.description}</p>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between font-bold text-sm text-[#D52036] group-hover:text-red-600 transition-colors">
                <span>View Details & Features</span>
                <span>&rarr;</span>
            </div>
        </div>
    </motion.div>
);

const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="We offer a comprehensive suite of services to transform your ideas into powerful digital solutions. Explore how we can help your business thrive."
      />
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                    <ServiceCard 
                        key={service.id} 
                        service={service} 
                        onClick={() => setCurrentPage('ServiceDetail', service.slug)}
                    />
                ))}
            </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default ServicesPage;
