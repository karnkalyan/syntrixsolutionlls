// FIX: Create the ContactPage component.
import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question about our services or want to start a project, get in touch!"
      />
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">Get In Touch</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
                </div>
                <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg mb-6" />
                <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg mb-6"></textarea>
                <button type="submit" className="bg-[#D52036] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:pl-12">
              <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Our Address</h4>
                    <p className="text-gray-600">1001 Hensley St Ste H, Richmond, California 94801</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <a href="mailto:support@syntrixsolutionsllc.com" className="text-gray-600 hover:text-red-500 font-medium">support@syntrixsolutionsllc.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <a href="tel:+15108507000" className="text-gray-600 hover:text-red-500 font-medium">+1 (510) 850-7000</a>
                  </div>
                </div>
              </div>

              {/* 24/7 Helpdesk Graphic Banner */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                <img 
                  src="/6284b9c3-1073-4249-8a30-fb1675b88e49.png" 
                  alt="Syntrix Solutions LLC 24/7 Helpdesk Support" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-gray-100">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider">24/7 Dedicated IT Support</p>
                  <p className="text-xs text-gray-600">Our engineers are standing by to assist with your infrastructure needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;