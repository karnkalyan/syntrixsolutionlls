import React from 'react';
import { Code, Database, Server, Wind, Bot, BrainCircuit } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Bot },
  { name: 'Django', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Server },
  { name: 'Docker', icon: Code },
  { name: 'TailwindCSS', icon: Wind },
  { name: 'Machine Learning', icon: BrainCircuit },
];

const TechMarquee: React.FC<{ items: typeof technologies, direction?: 'left' | 'right' }> = ({ items, direction = 'left' }) => {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? [0, -1090] : [-1090, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                },
            },
        },
    };
    
    return(
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" style={{ animationDirection: direction === 'left' ? 'normal' : 'reverse' }}>
                {items.concat(items).map((tech, index) => (
                    <li key={index} className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <tech.icon className="w-8 h-8 text-gray-500" />
                        <span className="text-xl font-semibold text-gray-500">{tech.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const TechStack: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B]">The Technologies We Use</h2>
                <p className="text-lg text-gray-600 mt-4">We leverage a modern, robust stack to build scalable and high-performance applications.</p>
            </div>
            <div className="space-y-6">
                <TechMarquee items={technologies} direction="left" />
                <TechMarquee items={[...technologies].reverse()} direction="right" />
            </div>
        </div>
    </section>
  );
};


export default TechStack;
