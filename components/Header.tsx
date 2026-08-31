import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
// FIX: Changed import path for Page type from '../App' to '../types'.
import type { Page } from '../types';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const Logo: React.FC<{ onNavigate: (page: Page) => void, textColor: string, isScrolled: boolean }> = ({ onNavigate }) => {
    return (
        <button onClick={() => onNavigate('Home')} className="flex items-center group">
            <img 
                src="/logo.png" 
                alt="Syntrix Solutions LLC" 
                className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-105" 
            />
        </button>
    );
};


interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navTextColor = isScrolled || isMenuOpen ? 'text-[#2B2B2B]' : 'text-white';
  const navLinkHoverColor = isScrolled || isMenuOpen ? 'hover:text-[#D52036]' : 'hover:text-gray-200';
  const topBarTextColor = isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white/80';
  const socialIconColor = isScrolled || isMenuOpen ? 'text-gray-500' : 'text-white/70';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`hidden md:block transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-gray-100/80' : 'bg-white/10'}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
            <div className={`flex items-center space-x-4 ${topBarTextColor}`}>
                <a href="mailto:syntrixsolutionsllc@gmail.com" className="flex items-center space-x-2 hover:text-[#D52036] transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>syntrixsolutionsllc@gmail.com</span>
                </a>
                <a href="tel:+15108507000" className="flex items-center space-x-2 hover:text-[#D52036] transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+1 (510) 850-7000</span>
                </a>
            </div>
            <div className="flex items-center space-x-4">
                {!user && (
                    <button onClick={() => setCurrentPage('Auth')} className={`flex items-center space-x-2 hover:text-[#D52036] transition-colors ${topBarTextColor}`}>
                        <LogIn className="h-4 w-4" />
                        <span>Admin Login</span>
                    </button>
                )}
                <a href="#" className={`${socialIconColor} hover:text-[#D52036] transition-colors`}><Facebook className="h-5 w-5" /></a>
                <a href="#" className={`${socialIconColor} hover:text-[#D52036] transition-colors`}><Twitter className="h-5 w-5" /></a>
                <a href="#" className={`${socialIconColor} hover:text-[#D52036] transition-colors`}><Linkedin className="h-5 w-5" /></a>
                <a href="#" className={`${socialIconColor} hover:text-[#D52036] transition-colors`}><Instagram className="h-5 w-5" /></a>
            </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className={`border-t transition-colors duration-300 ${isScrolled || isMenuOpen ? 'border-gray-200/50' : 'border-white/20'}`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Logo onNavigate={handleNavClick} textColor={navTextColor} isScrolled={isScrolled || isMenuOpen} />
              <nav className="hidden md:flex items-center space-x-8">
                {NAV_LINKS.map((link) => (
                  <button 
                    key={link.label} 
                    onClick={() => handleNavClick(link.page)} 
                    className={`text-base font-semibold transition-colors relative group ${currentPage === link.page ? 'text-[#F98829]' : `${navTextColor} ${navLinkHoverColor}`}`}>
                    {link.label}
                    <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 transition-transform duration-300 ${currentPage === link.page ? 'bg-[#F98829] scale-x-100' : 'bg-[#D52036] scale-x-0 group-hover:scale-x-100'}`}></span>
                  </button>
                ))}
              </nav>
              <button onClick={() => handleNavClick('Contact')} className="hidden md:inline-block font-bold py-3 px-6 rounded-lg transition-all duration-300 bg-[#D52036] text-white hover:bg-red-700 shadow-md">
                Get a Quote
              </button>
              <button className={`md:hidden ${navTextColor}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
      </div>
       {/* Mobile Menu */}
       <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden bg-white shadow-xl overflow-hidden"
            >
                <nav className="flex flex-col items-center space-y-4 py-8">
                {NAV_LINKS.map((link) => (
                    <button key={link.label} onClick={() => handleNavClick(link.page)} className={`text-lg font-medium transition-colors ${currentPage === link.page ? 'text-[#F98829]' : 'text-[#2B2B2B] hover:text-[#D52036]'}`}>
                    {link.label}
                    </button>
                ))}
                <button onClick={() => handleNavClick('Contact')} className="bg-[#D52036] text-white font-bold py-3 px-8 rounded-lg mt-4">
                    Get a Quote
                </button>
                </nav>
            </motion.div>
        )}
       </AnimatePresence>
    </header>
  );
};

export default Header;