// FIX: Create Clients component with logo marquee.
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-400 mb-10">Trusted by innovative companies worldwide</h2>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 animate-infinite-scroll">
                {CLIENTS.concat(CLIENTS).map((client, index) => (
                    <li key={index}>
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    </li>
                ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 animate-infinite-scroll" aria-hidden="true">
                {CLIENTS.concat(CLIENTS).map((client, index) => (
                    <li key={index}>
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
