import React, { useState } from 'react';
import { SERVICES } from '../constants';
import type { Page, Service } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedServicesProps {
  setCurrentPage: (page: Page, slug?: string) => void;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ setCurrentPage }) => {
  const featuredServices = SERVICES.slice(0, 4);
  const [activeTab, setActiveTab] = useState(featuredServices[0].id);
  const activeService = featuredServices.find(s => s.id === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-red-500 font-bold mb-2 tracking-wider">CORE OFFERINGS</p>
          <div className="w-10 h-1 bg-red-500 mb-4 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Innovate, Build, and Scale with Our Expertise</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Tabs */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              {featuredServices.map(service => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative w-full text-left p-5 rounded-xl transition-all duration-300 ${activeTab === service.id ? 'bg-white shadow-xl scale-[1.02] border border-red-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-4 transition-colors duration-300 ${activeTab === service.id ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-[#2B2B2B]">{service.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{service.description}</p>
                    </div>
                  </div>
                  {activeTab === service.id && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute -left-1.5 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#EF233C] to-[#F98829] rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content & Image */}
          <div className="w-full lg:w-7/12 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between w-full"
              >
                {activeService && (
                  <div>
                    {activeService.imageUrl && (
                      <div className="mb-6 overflow-hidden rounded-2xl shadow-md border border-gray-200/80 bg-white group aspect-[16/9] w-full relative flex items-center justify-center">
                        <img 
                          src={activeService.imageUrl} 
                          alt={activeService.title} 
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-[#2B2B2B] mb-3">{activeService.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{activeService.longDescription}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {activeService.keyFeatures.map((kf, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 flex items-center space-x-3 shadow-sm">
                          <kf.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-xs font-semibold text-gray-700">{kf.title}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setCurrentPage('ServiceDetail', activeService.slug)}
                      className="inline-flex items-center font-bold text-white bg-[#D52036] hover:bg-red-700 py-3 px-6 rounded-lg transition-colors shadow-md"
                    >
                      Learn More & View Solutions &rarr;
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
