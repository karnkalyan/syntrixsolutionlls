import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#D52036]">
      {/* Background Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-full">
         <div 
          className="absolute bottom-0 left-0 w-full h-[60%] bg-[#F98829]" 
          style={{ clipPath: 'ellipse(120% 60% at 50% 100%)' }}
        ></div>
         <div 
          className="absolute bottom-0 left-0 w-full h-full bg-[#D52036]" 
          style={{ clipPath: 'ellipse(180% 80% at 50% 100%)' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-20 md:pt-40 md:pb-24">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    </section>
  );
};

export default PageHero;
