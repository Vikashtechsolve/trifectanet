import React from 'react';
import Hero from '../components/Hero';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { LineChart } from 'lucide-react';

const AerospaceAndAviation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Aerospace &"
        subtitle="Aviation"
        description="Elevating aerospace and aviation operations with cutting-edge technology solutions that enhance safety, efficiency, and performance."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Aerospace and Aviation Content */}
      <section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Importance of IT Solutions Section - Content Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
      <div className="order-2 md:order-1 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#0a3d62]">Importance of</span>{" "}
          <span className="text-[#f47847]">IT Solutions</span>
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            Technology has revolutionized the aerospace and aviation sector in numerous ways. Advanced navigation systems, real-time data analytics, and predictive maintenance tools have improved safety, reduced operational costs, and enhanced passenger experience.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Whether it's optimizing flight routes to conserve fuel or using AI-driven maintenance schedules to ensure aircraft reliability, IT solutions are indispensable in ensuring smooth operations and minimizing downtime. These technologies enable better decision-making, improved safety protocols, and enhanced operational efficiency.
          </p>
        </div>
      </div>
      <div className="relative order-1 md:order-2 self-center">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="Importance of IT Solutions" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="relative order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Accord Innovations' Contribution" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
      <div className="order-2 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#f47847]">Accord Innovations'</span>{" "}
          <span className="text-[#0a3d62]">Contribution</span>
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            Accord Innovations provides specialized IT solutions designed for the aerospace and aviation industry. Our expertise in flight operations, maintenance management, and safety systems helps organizations optimize their operations and enhance passenger experience.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            We leverage advanced technologies such as IoT, AI, and predictive analytics to enable real-time monitoring, automated maintenance scheduling, and enhanced safety protocols. With Accord Innovations as your technology partner, you can improve operational efficiency, reduce costs, and ensure the highest standards of safety and reliability.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
  {/* Banking & Financial Services OFFERINGS */}
  <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Banking & Financial Services</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the unique challenges of the banking and financial services industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Security & Compliance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Flight Management Systems Enhancement</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Elevate your flight operations with our Flight Management Systems Enhancement solutions. We offer advanced software and analytics tools to optimize flight routes, reduce fuel consumption, and enhance in-flight decision-making.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Predictive Maintenance Solutions</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Ensure aircraft reliability and safety with our Predictive Maintenance Solutions. Our AI-driven maintenance schedules and real-time monitoring tools help identify potential issues before they lead to costly downtime.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Passenger Experience Enhancement</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Delight your passengers with our Passenger Experience Enhancement solutions. From in-flight entertainment systems to streamlined booking and check-in processes, we create technology-driven experiences that set your airline apart.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Supply Chain Optimization
              </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Streamline your supply chain operations with our Supply Chain Optimization solutions. We help you manage inventory, reduce procurement costs, and ensure the timely delivery of critical components, contributing to overall operational efficiency and cost savings.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AerospaceAndAviation;
