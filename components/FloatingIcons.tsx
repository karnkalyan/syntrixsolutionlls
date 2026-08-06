import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Server, Smartphone, GitBranch } from 'lucide-react';

const icons = [
  { component: Code, size: 'w-8 h-8' },
  { component: Database, size: 'w-10 h-10' },
  { component: GitBranch, size: 'w-8 h-8' },
  { component: Cloud, size: 'w-12 h-12' },
  { component: Server, size: 'w-9 h-9' },
  { component: Smartphone, size: 'w-7 h-7' },
];

const generateIcons = (count: number) => {
  const selectedIcons = [];
  for (let i = 0; i < count; i++) {
    const icon = icons[i % icons.length];
    selectedIcons.push({
      ...icon,
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10, // 10-20 seconds
      delay: Math.random() * 5,
    });
  }
  return selectedIcons;
};

const FloatingIcons: React.FC = () => {
  const particleIcons = generateIcons(15);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particleIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          style={{
            top: icon.top,
            left: icon.left,
          }}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, Math.random() * 40 - 20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, Math.random() > 0.5 ? 20 : -20, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <icon.component className={`${icon.size} opacity-10 text-gray-500`} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;