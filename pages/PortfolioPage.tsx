// FIX: Create the PortfolioPage to showcase projects.
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import type { PortfolioItem } from '../types';
import PageHero from '../components/PageHero';
import PortfolioDetailModal from '../components/PortfolioDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import { useSiteData } from '../context/SiteDataContext';

const PortfolioPage: React.FC = () => {
  const { portfolioItems } = useSiteData();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(portfolioItems.map(item => item.category))];
    uniqueCategories.sort();
    return ['All', ...uniqueCategories];
  }, [portfolioItems]);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter, portfolioItems]);
  
  const handleViewProject = (item: PortfolioItem) => {
    setSelectedProject(item);
  };

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="We take pride in our work. Explore some of the projects we've successfully delivered for our clients."
      />
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-[#D52036] text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group cursor-pointer border border-gray-100 flex flex-col"
                  onClick={() => handleViewProject(item)}
                >
                  <div className="relative overflow-hidden aspect-[16/9] w-full bg-white border-b border-gray-100 flex items-center justify-center">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                      <span className="text-white font-bold border-2 border-white rounded-full px-6 py-2 mb-2">View Project Details</span>
                      {item.metrics && (
                        <span className="text-xs text-red-300 font-semibold bg-black/60 px-3 py-1 rounded-full">{item.metrics}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">{item.category}</span>
                      <span className="text-xs text-gray-400 font-medium">{item.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2B2B2B] mt-1 line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2 flex-grow">{item.description}</p>
                    {item.metrics && (
                      <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-[#D52036]">
                        {item.metrics}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CallToAction />
      
      <PortfolioDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default PortfolioPage;