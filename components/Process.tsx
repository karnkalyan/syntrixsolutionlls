import React from 'react';
import { PROCESS_STEPS } from '../constants';
import type { ProcessStep } from '../types';
import { motion } from 'framer-motion';

const ProcessStepCard: React.FC<{ step: ProcessStep, index: number }> = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex justify-between items-center w-full">
            {/* Left or Right Content */}
            <div className={`w-5/12 ${isEven ? 'order-1' : 'order-3'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                        {step.imageUrl && (
                            <div className="mb-4 overflow-hidden rounded-xl h-36 border border-gray-100">
                                <img src={step.imageUrl} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                </motion.div>
            </div>

            {/* Middle Icon */}
            <div className="w-2/12 order-2 flex justify-center">
                 <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                    className="z-10 bg-white p-3.5 rounded-full shadow-xl border-4 border-[#D52036]"
                 >
                    <step.icon className="h-7 w-7 text-[#D52036]" />
                 </motion.div>
            </div>
        </div>
    );
};

const Process: React.FC = () => {
  return (
    <motion.section 
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-red-500 font-bold mb-2 tracking-wider">HOW WE WORK</p>
          <div className="w-10 h-1 bg-red-500 mb-4 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Our Proven Agile Development Process</h2>
        </div>

        {/* Featured Agile Process Graphic Banner */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="/ba2b654c-750c-4146-93e1-ff462d700355.png" 
              alt="Agile Development Process & Workflow" 
              className="w-full h-auto object-cover" 
            />
        </div>
        
        <div className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <motion.div 
                className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#D52036]/20 rounded-full"
                style={{ transform: 'translateX(-50%)', originY: 0 }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            <div className="space-y-16 w-full">
                {PROCESS_STEPS.map((step, index) => (
                    <ProcessStepCard key={step.title} step={step} index={index} />
                ))}
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
