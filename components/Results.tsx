import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import GlobeAnimation from './GlobeAnimation';
import { ACCOMPLISHMENTS } from '../constants';

const AnimatedCounter: React.FC<{ end: number; startAnimation: boolean }> = ({ end, startAnimation }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(0, end, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate: (latest) => setCurrentValue(Math.round(latest)),
      });
      return () => controls.stop?.();
    }
  }, [startAnimation, end]);

  return <span>{currentValue.toLocaleString()}+</span>;
};

const Results: React.FC = () => {
  const stats = [
    { value: 200, label: 'Satisfied Clients' },
    { value: 350, label: 'Projects Completed' },
    { value: 8, label: 'Years of Experience' },
  ];

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
    >
      <GlobeAnimation />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-red-500 font-bold mb-2 tracking-wider">RESULTS & RECOGNITION</p>
            <div className="w-10 h-1 bg-red-500 mb-4 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B]">Delivering Excellence & Guaranteed SLAs</h2>
        </div>
        
        {/* SLA Guarantee Graphic Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img src="/ee6ab83e-f544-4fef-b532-09798941d6d0.png" alt="Service Level Agreement & Business Continuity" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img src="/acb10ac6-ded9-469a-a420-3a92cc572f5a.png" alt="Continuous Support & Proactive Monitoring 99.9% Uptime" className="w-full h-auto object-cover" />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Stats */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <p className="text-5xl md:text-6xl font-extrabold animated-gradient-text">
                            <AnimatedCounter end={stat.value} startAnimation={isInView} />
                        </p>
                        <p className="text-gray-600 font-semibold mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
            {/* Accomplishments */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {ACCOMPLISHMENTS.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-5 flex items-center shadow-md border border-gray-100"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                        <div className="p-3 bg-red-100 rounded-md mr-4">
                            <item.icon className="h-7 w-7 text-[#EF233C]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#2B2B2B]">{item.name}</h3>
                            <p className="text-gray-500 text-sm">Verified Achievement & Certified SLA</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Results;
