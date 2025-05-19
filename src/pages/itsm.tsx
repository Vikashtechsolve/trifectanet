import React from 'react';
import Hero from '../components/Hero';
import { Headphones, AlertTriangle, RefreshCw, BookOpen } from 'lucide-react';

const ITSM: React.FC = () => {
  return (
    <div>
      <Hero
        title="IT Service"
        subtitle="Management"
        description="Transform your IT service delivery with comprehensive ITSM solutions that enhance efficiency, productivity, and user satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* ITSM Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#0a3d62]">ITSM</span>{" "}
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                E-Commerce, streaming platforms, industrial hubs and services industries rely heavily on IT infrastructure. IT forms the back bone of processes and services provided by these entities. Nonetheless, malfunction, bottlenecks and service disruption can spell disaster in terms of efficiency, sales and customer service. AI-GTS, is here to offer its clients monitoring and automation services which includes on-premises as well as on-cloud set-ups.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our methodology focuses on implementing industry best practices like ITIL, while leveraging modern ITSM tools and automation to streamline service delivery processes. We emphasize continuous improvement and user satisfaction throughout the implementation journey.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Our Solutions Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1134&q=80" 
                alt="Our Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
            <div className="order-2 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#f47847]">Accord Innovations'</span>{" "}
                <span className="text-[#0a3d62]">Contribution</span>
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Accord Innovations delivers comprehensive ITSM solutions that transform how organizations manage and deliver IT services. Our expertise in service desk implementation, incident management, and change management helps businesses ensure efficient and reliable service delivery.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  We provide end-to-end ITSM services, from assessment and strategy development to implementation, training, and ongoing support. Our solutions are built on industry-leading platforms and best practices, ensuring that your service management capabilities evolve alongside your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITSM OFFERINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">IT Service Management</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive ITSM solutions designed to enhance service delivery, improve efficiency, and ensure user satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Service Desk */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Service Desk</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We implement and manage modern service desk solutions that provide a single point of contact for all IT service requests and support needs.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Incident Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Incident Management</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We implement cutting edge tools and technologies to reduce productivity outages, improve lead time for every IT ticket life cycle, manage and monitor SLA (Service Level Agreements), reduce processing timeline, and improve efficiency of agents and support system.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Change Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Change Management</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We reduce IT infrastructure and operating costs, provide cost effectiveness through innovative monitoring and management, and offer state of the art environment that allows organisations to scale or make changes quickly and effectively.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Service Catalog */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Service Request Management </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Customer requests are an integral part of any commercial / manufacturing and start up entity. This can include a gamut of demands. Our easily implementable tools help big and small organisations fulfil these obligations efficiently and within the stipulated time frame. Our request fulfilment tool not just resolves service requests but generates / manages the entire lifecycle of such demands.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSM; 