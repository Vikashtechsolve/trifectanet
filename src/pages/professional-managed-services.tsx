import React from 'react';
import Hero from '../components/Hero';
import { Server, Shield, Headphones, Zap } from 'lucide-react';

const ProfessionalManagedServices: React.FC = () => {
  return (
    <div>
      <Hero
        title="Professional"
        subtitle="Managed Services"
        description="Optimize your IT operations with comprehensive managed services that ensure reliability, security, and continuous improvement."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Professional Managed Services Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#0a3d62]">Streamlined Resource</span>{" "}
                <span className="text-[#f47847]">Management</span>
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Managing an IT infrastructure and ensuring its seamless operation can be a daunting task, diverting valuable resources and attention away from core business functions. With Accord Innovations as your IT partner, you can focus on what you do best—growing your business—while we handle the intricacies of IT management.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our Professional Managed Services provide peace of mind, knowing that your technology is in capable hands, allowing you to stay competitive, agile, and secure in an increasingly digital world. We offer a tailored approach, understanding that each business has unique IT requirements and challenges.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Our Solutions Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
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
                  In the realm of information technology, project-driven demands often lead to fluctuations in workforce requirements. We offer a flexible outsourcing service that empowers you to secure contract-based resources precisely when your projects necessitate them.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Under our stewardship, you can entrust the entire candidate selection process to us, complete with an assurance that covers the entire duration of the contract. This flexibility not only optimizes your resource allocation but also streamlines your project management, enabling you to adapt swiftly to evolving project scopes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Managed Services OFFERINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Professional Managed Services</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive managed services designed to ensure reliability, security, and optimal performance of your IT environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Infrastructure Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">24/7 Monitoring and Support</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We provide round-the-clock monitoring of your IT systems to identify and address issues before they disrupt your operations. Our team is always available to provide immediate support when you need it.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Security Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Security Management</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Data security is paramount in today's digital landscape. We implement robust security measures to protect your sensitive information and ensure compliance with industry regulations.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Service Desk */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Proactive Maintenance</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We take a proactive approach to IT maintenance, addressing potential problems and optimizing your systems to improve performance and reliability.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Performance Optimization */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Scalability</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                As your business grows, your IT needs change. We ensure that your IT infrastructure can scale seamlessly to accommodate your evolving requirements.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalManagedServices; 