import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import GlobeAnimation from './GlobeAnimation';

// This counter animates when its `startAnimation` prop becomes true.
const AnimatedCounter: React.FC<{ end: number; startAnimation: boolean }> = ({ end, startAnimation }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(0, end, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setCurrentValue(Math.round(latest));
        },
      });
      return () => controls.stop?.();
    }
  }, [startAnimation, end]);

  return <span>{currentValue.toLocaleString()}</span>;
};


const Stats: React.FC = () => {
  const stats = [
    { value: 200, label: 'Satisfied Clients' },
    { value: 350, label: 'Projects Completed' },
    { value: 50, label: 'Apps Launched' },
    { value: 8, label: 'Years Completed' },
  ];

  // A single ref for the whole section
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-24 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <GlobeAnimation />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-36 h-36 md:w-48 md:h-48 mx-auto bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-gray-100">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#EF233C]">
                    {/* Pass the single isInView boolean to each counter */}
                    <AnimatedCounter end={stat.value} startAnimation={isInView} />
                  </div>
              </div>
              <p className="text-lg text-gray-700 font-semibold mt-6">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;