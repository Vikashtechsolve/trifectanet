import React from 'react';
import Hero from '../components/Hero';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { LineChart } from 'lucide-react';

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Healthcare"
        subtitle="Innovation"
        description="Transforming healthcare delivery with technology solutions that enhance patient care, streamline operations, and improve outcomes."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Healthcare Content */}
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
            In the healthcare sector, IT solutions are the cornerstone of delivering better services, increasing customer satisfaction, and ensuring regulatory compliance. These solutions streamline administrative processes, improve data accuracy, enhance patient care, and enable healthcare providers to make informed decisions.
          </p>
          <p className="text-lg leading-relaxed tracking-normal">
            From electronic health records (EHR) systems to telemedicine platforms, IT solutions play a crucial role in revolutionizing healthcare delivery.
          </p>
        </div>
      </div>
      <div className="relative self-center">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Importance of IT Solutions" 
          className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 md:order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
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
            Accord Innovations is your trusted partner in the healthcare industry. We offer world-class IT solutions and services customized for payers, pharmacy benefit managers (PBMs), providers, and other healthcare stakeholders.
          </p>
          <p className="text-lg leading-relaxed tracking-normal">
            Our comprehensive range of services enhances brand value and ensures the efficient functioning of healthcare organizations. With years of experience in the healthcare sector, Accord Innovations is committed to delivering innovative solutions that address the unique challenges of the industry.
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
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Web & App Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Transform your healthcare operations with our web and app development solutions. We create user-friendly, secure, and scalable applications that streamline patient management, appointment scheduling, and telehealth services.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Vendor Management Solutions</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Simplify vendor management and procurement processes with our Vendor Management Solutions. Ensure transparency, cost-efficiency, and compliance in your supply chain operations while maintaining a strong focus on patient care.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Claims Management Solutions</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Optimize claims processing with our Claims Management Solutions. Our advanced technology automates claims adjudication, reducing errors and turnaround times while improving revenue cycle management.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Chatbot Implementations
              </h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Enhance patient engagement and support with Chatbot Implementations. Our AI-powered chatbots provide 24/7 assistance, appointment scheduling, and symptom assessment, improving patient satisfaction and reducing administrative burdens.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Healthcare;
