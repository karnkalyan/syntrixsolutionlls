import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import type { FaqItem } from '../types';
import { motion } from 'framer-motion';

const AccordionItem: React.FC<{ item: FaqItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left py-5 px-6"
      >
        <h4 className="text-lg font-semibold text-[#2B2B2B] pr-4"><span className="mr-2">{index + 1}.</span>{item.question}</h4>
        <div className={`transform transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 px-6 text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Frequently Asked Questions (FAQs)</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 divide-y divide-gray-200">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;