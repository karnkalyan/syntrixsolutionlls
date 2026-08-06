import React from 'react';
import { motion } from 'framer-motion';

export interface USACompany {
  name: string;
  category: string;
  brandColor: string;
  symbol: string;
}

export const USA_COMPANIES: USACompany[] = [
  { name: 'Snowflake', category: 'Data Cloud', brandColor: '#29B5E8', symbol: '❄️' },
  { name: 'Twilio', category: 'Communications', brandColor: '#F22F46', symbol: '🔴' },
  { name: 'Datadog', category: 'Cloud Security', brandColor: '#632CA6', symbol: '🐶' },
  { name: 'Fastly', category: 'Edge Cloud', brandColor: '#FF282D', symbol: '⚡' },
  { name: 'MongoDB', category: 'Enterprise DB', brandColor: '#00ED64', symbol: '🍃' },
  { name: 'Cloudflare', category: 'Global CDN', brandColor: '#F38020', symbol: '☁️' },
  { name: 'HashiCorp', category: 'Infrastructure', brandColor: '#0062FF', symbol: '🏗️' },
  { name: 'PagerDuty', category: 'Ops Automation', brandColor: '#06AC38', symbol: '🚨' },
  { name: 'Asana', category: 'Work Management', brandColor: '#F95738', symbol: '✦' },
  { name: 'Okta', category: 'Identity & Access', brandColor: '#007DC1', symbol: '🛡️' },
];

const ClientLogos: React.FC = () => {
  return (
    <div className="w-full bg-[#0d0d0d] py-10 border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Trusted By Innovative Companies Worldwide
        </p>
      </div>

      {/* Ticker / Marquee Container */}
      <div className="flex overflow-hidden space-x-8 select-none group">
        <motion.div 
          className="flex space-x-6 sm:space-x-8 shrink-0 items-center min-w-full justify-around"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {[...USA_COMPANIES, ...USA_COMPANIES].map((company, index) => (
            <div 
              key={`${company.name}-${index}`}
              className="flex items-center space-x-3 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              <span className="text-lg" style={{ color: company.brandColor }}>
                {company.symbol}
              </span>
              <span className="font-extrabold text-sm sm:text-base tracking-tight" style={{ color: company.brandColor }}>
                {company.name}
              </span>
              <span className="text-[10px] font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 uppercase">
                {company.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;
