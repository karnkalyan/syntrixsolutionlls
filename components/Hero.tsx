import React from 'react';
import { motion } from 'framer-motion';
import FuturisticAnimation from './FuturisticAnimation';
import { ShieldCheck, Activity, ArrowRight, Award, Zap, CheckCircle2 } from 'lucide-react';

interface HeroProps {
    onNavigate: (page: 'Contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden bg-[#0d0d0d] pt-24 pb-16">
      {/* Background Canvas Animation with Maroon & Black Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#580c14] via-[#1a0507] to-[#0d0d0d]">
        <FuturisticAnimation />
        {/* Maroon Ambient Glow Halo Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D52036]/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EF233C]/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#580c14]/50 via-black/75 to-[#0d0d0d] z-10"></div>
      </div>
      
      {/* Hero Content (Centered, Image-Free) */}
      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-red-300 uppercase">
              Syntrix Solutions LLC • Managed IT & Digital Engineering
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight text-white">
            We Build <span className="animated-gradient-text">Digital Experiences</span> That Drive Growth.
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            From enterprise web engineering and cybersecurity to proactive 24/7 IT support and cloud migration, we turn bold ideas into reliable business outcomes.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center items-center mb-14">
            <motion.button 
              onClick={() => onNavigate('Contact')}
              className="bg-gradient-to-r from-[#EF233C] to-[#F98829] text-white font-bold py-4 px-10 rounded-2xl text-lg hover:scale-105 transition-transform duration-300 shadow-2xl shadow-red-500/30 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a
              href="#services"
              className="border border-white/30 text-white font-semibold py-4 px-10 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              Explore Services
            </a>
          </div>

          {/* Key Stat Highlights Bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1.5 text-red-400 font-extrabold text-xl sm:text-2xl mb-1">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span>99.99%</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Server Uptime SLA</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1.5 text-orange-400 font-extrabold text-xl sm:text-2xl mb-1">
                <Activity className="w-5 h-5 text-orange-500" />
                <span>24/7</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Proactive Monitoring</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1.5 text-red-400 font-extrabold text-xl sm:text-2xl mb-1">
                <Award className="w-5 h-5 text-red-500" />
                <span>150+</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Projects Delivered</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1.5 text-orange-400 font-extrabold text-xl sm:text-2xl mb-1">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>100%</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">Code & Data Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
