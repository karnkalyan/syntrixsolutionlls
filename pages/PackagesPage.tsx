// FIX: Create the PackagesPage to display pricing tiers.
import React from 'react';
import { PACKAGES } from '../constants';
import type { Package } from '../types';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const PackageCard: React.FC<{ packageInfo: Package }> = ({ packageInfo }) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col h-full overflow-hidden group"
    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
    transition={{ duration: 0.3 }}
  >
    {packageInfo.imageUrl && (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center">
        <img src={packageInfo.imageUrl} alt={packageInfo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <span className="text-white font-bold text-lg leading-tight drop-shadow">{packageInfo.title}</span>
        </div>
      </div>
    )}

    <div className="p-8 flex flex-col flex-grow">
      {!packageInfo.imageUrl && (
        <div className="flex-shrink-0 mb-6">
            <div className="inline-block p-4 bg-red-100 rounded-full">
                <packageInfo.icon className="h-8 w-8 text-[#D52036]" />
            </div>
        </div>
      )}
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <span className="text-3xl font-extrabold text-[#2B2B2B]">${packageInfo.price}</span>
          <span className="text-gray-500 font-semibold text-sm">/{packageInfo.period}</span>
        </div>
        <span className="text-xs font-bold bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Popular</span>
      </div>
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{packageInfo.description}</p>
      <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
        {packageInfo.features.map(feature => (
          <li key={feature} className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700 text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full mt-auto font-bold py-3.5 px-6 rounded-xl transition-all duration-300 bg-[#D52036] text-white hover:bg-red-700 shadow-md hover:shadow-lg">
          Choose {packageInfo.title}
      </button>
    </div>
  </motion.div>
);

const PackagesPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Our Packages"
        subtitle="Transparent pricing plans designed to fit your needs, from startups to enterprise-level projects."
      />
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map(pkg => (
              <PackageCard key={pkg.title} packageInfo={pkg} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default PackagesPage;