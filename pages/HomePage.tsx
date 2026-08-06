import React from 'react';
import type { Page } from '../types';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import FeaturedServices from '../components/FeaturedServices';
import WhyUs from '../components/WhyUs';
import Results from '../components/Results';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import CallToAction from '../components/CallToAction';

interface HomePageProps {
  setCurrentPage: (page: Page, slug?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Hero onNavigate={() => setCurrentPage('Contact')} />
      <ClientLogos />
      <FeaturedServices setCurrentPage={setCurrentPage} />
      <WhyUs />
      <Results />
      <Process />
      <TechStack />
      <Testimonials />
      <Faq />
      <CallToAction />
    </>
  );
};

export default HomePage;
