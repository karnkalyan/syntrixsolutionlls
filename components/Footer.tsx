import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const servicesLinks = ['Web Development', 'SaaS Development', 'Mobile Apps', 'ERP & Integrations', 'Python & ML', 'Cloud & DevOps'];
  const hireUsLinks = ['Python Development', 'Angular & React', 'iOS Development', 'SaaS Development'];

  return (
    <footer className="bg-[#1E1E1E] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
             <img src="/logo.png" alt="Syntrix Solutions LLC" className="h-10 w-auto object-contain bg-white px-3 py-1 rounded-lg mb-4 shadow-sm" />
             <h5 className="font-bold text-lg mb-4">Contact Us</h5>
             <address className="not-italic text-white/70 space-y-3">
                <p>1001 Hensley St Ste H, Richmond, California 94801</p>
                <p><a href="tel:+15108507000" className="hover:text-white transition-colors">+1 (510) 850-7000</a></p>
                <p><a href="mailto:syntrixsolutionsllc@gmail.com" className="hover:text-white transition-colors">syntrixsolutionsllc@gmail.com</a></p>
             </address>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Our Services</h5>
            <ul className="space-y-3">
              {servicesLinks.map(link => (
                <li key={link}><a href="#" className="text-white/70 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-4">Hire Us</h5>
            <ul className="space-y-3">
              {hireUsLinks.map(link => (
                <li key={link}><a href="#" className="text-white/70 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-4">Connect</h5>
             <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white/70 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Instagram className="h-6 w-6" /></a>
             </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>Copyright &copy; {new Date().getFullYear()} Syntrix Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;