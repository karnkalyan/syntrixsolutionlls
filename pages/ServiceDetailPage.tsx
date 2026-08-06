import React from 'react';
import { SERVICES } from '../constants';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';

interface ServiceDetailPageProps {
  slug: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">The service you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        title={service.title}
        subtitle={service.description}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
            {/* Service Banner Graphic */}
            {(service.bannerUrl || service.imageUrl) && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white aspect-[16/9] w-full flex items-center justify-center">
                <img 
                  src={service.bannerUrl || service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-16">
                {/* Main Content */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">Our Approach to {service.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {service.longDescription}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        At Syntrix Solutions LLC, we combine technical expertise with a strategic vision to deliver solutions that are not only powerful but also perfectly aligned with your business objectives. Our agile development process ensures transparency, flexibility, and a final product that truly performs.
                    </p>

                    {/* Secondary Illustration Graphic */}
                    {service.imageUrl && service.bannerUrl && (
                      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white aspect-[16/9] w-full mt-8">
                        <img 
                          src={service.imageUrl} 
                          alt={`${service.title} Technical Architecture`} 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    )}
                </div>

                {/* Key Features */}
                <div className="w-full lg:w-1/3">
                     <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200/80 shadow-md">
                        <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6">Key Features & SLAs</h3>
                        <div className="space-y-6">
                            {service.keyFeatures.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-xl mr-4">
                                        <feature.icon className="h-6 w-6 text-[#D52036]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                                        <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServiceDetailPage;
