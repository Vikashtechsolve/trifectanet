import React from 'react';
import Hero from '../components/Hero';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { LineChart } from 'lucide-react';

const Insurance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Insurance"
        subtitle="Innovation"
        description="Transforming insurance operations with technology solutions that enhance risk assessment, claims processing, and customer experience."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

     {/* Insurance Content */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Importance of IT Solutions Section - Content Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
      <div className="self-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-[#0a3d62]">Importance of</span>{" "}
          <span className="text-[#f47847]">IT Solutions</span>
        </h2>
        <div className="space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-lg leading-relaxed tracking-normal">
            In the insurance industry, IT solutions are essential for modernizing operations, improving risk assessment, and enhancing customer experience. The digital transformation of insurance processes enables more accurate underwriting, faster claims processing, and personalized policy offerings.
          </p>
          <p className="text-lg leading-relaxed tracking-normal">
            Advanced analytics, artificial intelligence, and machine learning technologies allow insurance companies to analyze vast amounts of data to identify patterns, predict risks, and automate routine tasks. This digital evolution is crucial for staying competitive in a rapidly changing market where customers expect seamless digital experiences and personalized services.
          </p>
        </div>
      </div>
      <div className="relative self-center">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Importance of IT Solutions" 
          className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 md:order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80" 
          alt="Accord Innovations' Contribution" 
          className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
        />
      </div>
      <div className="order-1 md:order-2 self-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-[#f47847]">Accord Innovations'</span>{" "}
          <span className="text-[#0a3d62]">Contribution</span>
        </h2>
        <div className="space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-lg leading-relaxed tracking-normal">
            Accord Innovations provides comprehensive insurance technology solutions that address the unique challenges of the insurance industry. Our suite includes policy management systems, claims processing platforms, risk assessment tools, and customer relationship management solutions.
          </p>
          <p className="text-lg leading-relaxed tracking-normal">
            We specialize in implementing AI-powered analytics for risk assessment, automated claims processing workflows, and digital customer engagement platforms. Our solutions enable insurance companies to streamline operations, reduce processing times, enhance fraud detection, and deliver personalized services that improve customer satisfaction and retention.
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
              <span className="text-[#0a3d62]">Insurance </span>{" "}
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
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Advanced Claims Processing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Streamline claims processing with our state-of-the-art solutions. We leverage automation and AI to expedite claims assessment, reduce fraud, and enhance customer satisfaction by providing quicker, more accurate claims settlements.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Data-Driven Risk Assessment
              </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              In the Insurance sector, data is a critical asset. Our data analytics and risk assessment tools empower insurers to make data-driven decisions, assess risks more accurately, and design tailored insurance products that meet customer needs.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Customer-Centric Digital Engagement</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Elevate customer engagement through our customer-centric digital platforms. From user-friendly mobile apps to chatbots for instant support, our solutions enhance the customer experience, improving retention rates and overall satisfaction.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Regulatory Compliance Solutions
              </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              We understand the complexity of insurance regulations. Our compliance solutions automate regulatory processes, ensuring insurers adhere to evolving legal requirements while maintaining operational efficiency.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insurance;
