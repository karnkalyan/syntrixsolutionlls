import React from 'react';
import { WHY_US_ITEMS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingIcons from './FloatingIcons';

const listVariants = {
  visible: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const WhyUs: React.FC = () => {
  return (
    <motion.section 
        className="py-20 md:py-28 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
    >
        <FloatingIcons />
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="max-w-xl">
                        <p className="text-red-500 font-bold mb-2 tracking-wider">WHY CHOOSE SYNTRIX SOLUTIONS LLC?</p>
                        <div className="w-10 h-1 bg-red-500 mb-4"></div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] mb-6">We don't just deliver solutions—we deliver results that matter.</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">Our dedicated engineers, cybersecurity experts, and cloud architects ensure your infrastructure operates with guaranteed SLAs and continuous growth.</p>
                        <motion.ul 
                          className="space-y-4 mt-6"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          variants={listVariants}
                        >
                            {WHY_US_ITEMS.map((item) => (
                                <motion.li key={item.point} className="flex items-center" variants={itemVariants}>
                                    <CheckCircle2 className="h-6 w-6 text-red-500 mr-4 flex-shrink-0"/>
                                    <span className="text-base font-semibold text-gray-700">{item.point}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
                 <div className="w-full lg:w-1/2 px-4">
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                        <img 
                          src="/c2ecbd98-4cb4-4f7b-82f3-2190b83c759e.png" 
                          alt="Syntrix Solutions LLC Team Collaboration" 
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs flex items-center space-x-3">
                          <img src="/ca7652f3-5bde-4f40-9fe0-ecea8164e623.png" alt="SLA Assurance" className="w-12 h-12 object-contain rounded-md" />
                          <div>
                            <p className="text-xs font-bold text-gray-900">SLA & AMC Guarantee</p>
                            <p className="text-[11px] text-gray-600">24/7 Support & Rapid Response</p>
                          </div>
                        </div>
                    </motion.div>
                 </div>
            </div>
        </div>
    </motion.section>
  );
};

export default WhyUs;