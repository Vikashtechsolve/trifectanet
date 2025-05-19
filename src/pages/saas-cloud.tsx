import React from 'react';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import { Cloud, Server, Database, Shield } from 'lucide-react';

const SaasCloud: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="SaaS &"
        subtitle="Cloud"
        description="Leverage the power of cloud computing and SaaS solutions to transform your business operations and drive innovation."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* SaaS & Cloud Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#0a3d62]">Scalable and Future-Ready Solutions</span>{" "}
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  At Accord Innovations, we understand that business needs evolve, and scalability is essential. Our cloud and SaaS solutions are designed to grow with your organization, ensuring you can seamlessly accommodate increased user demands and expanding data volumes. Whether you're a startup with ambitious growth plans or a well-established enterprise, our scalable solutions adapt to your requirements, keeping you future-ready in the dynamic digital landscape.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Our Solutions Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
            <div className="order-2 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#f47847]">Security and Compliance at the Core</span>{" "}
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Data security and compliance are non-negotiable in today's business environment. Accord Innovations places the utmost emphasis on safeguarding your data. We implement robust security measures and compliance protocols to protect your sensitive information. Our cloud-based solutions are engineered with multi-layered security, encryption, and access controls. Rest assured that your data is not only accessible but also secure, meeting the highest industry standards and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS & Cloud OFFERINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">SaaS & Cloud</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud and SaaS solutions designed to enhance your business agility, efficiency, and competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Cloud Migration */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Seamless Migration and Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              We specialize in smooth migration to SaaS models and tailor-made cloud-based solutions. From existing product transitions to creating new, purpose-built applications, we ensure your unique needs are met with precision and expertise.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Cloud Infrastructure */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Scalability for Future Growth</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Our cloud solutions are designed to scale effortlessly as your business grows. Whether you're a startup or an enterprise, our adaptable solutions ensure you can accommodate increased users and expanding data volumes while staying future-ready.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: SaaS Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Robust Security and Compliance</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Security is paramount. We prioritize data protection through multi-layered security, encryption, and stringent compliance measures. Your data remains safe, meeting the highest industry standards and regulatory requirements.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Cloud Security */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Cost-Effective Accessibility
              </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              With Accord, you can access real-time software without the need for local installations or maintenance. Our cloud-based services offer cost-effective, anytime, anywhere access, accommodating a wide spectrum of users from small teams to large enterprises.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SaasCloud; 