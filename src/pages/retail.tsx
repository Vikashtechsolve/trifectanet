import React from 'react';
import Hero from '../components/Hero';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { LineChart } from 'lucide-react';

const Retail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Retail"
        subtitle="Innovation"
        description="Transforming retail operations with technology solutions that enhance customer experience, streamline operations, and drive growth."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Retail Content */}
      <section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Importance of IT Solutions Section - Content Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
      <div className="order-2 md:order-1 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#0a3d62]">Importance of</span>{" "}
          <span className="text-[#f47847]">IT Solutions</span>
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            IT solutions play a pivotal role in revolutionizing the retail sector. From optimizing customer relationship management (CRM) to enhancing supply chain management (SCM), technology is the key to achieving operational efficiency. It empowers retailers to create seamless e-business experiences, leverage advanced data warehousing and business intelligence, and develop agile technology infrastructures.
          </p>
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            Additionally, IT solutions enable retailers to address critical areas such as cybersecurity, digital workplaces, and intelligent operations, ensuring they stay ahead in an ever-competitive market. These technologies help retailers personalize customer experiences, optimize inventory management, and implement data-driven decision-making processes.
          </p>
        </div>
      </div>
      <div className="relative order-1 md:order-2 self-center">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Importance of IT Solutions" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="relative order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            Accord Innovations brings a wealth of retail knowledge, insight, and project execution skills to help you overcome the unique challenges of the retail sector. Our expertise spans across CRM, SCM, technology infrastructure, ERP, data warehousing, and business intelligence.
          </p>
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            We collaborate with industry specialists and customers through our Centers of Excellence in supply chain planning, merchandising, RFID, pharmacy in retail, in-store solutions, and data analytics. As your trusted partner, Accord Innovations empowers your retail business to thrive in the digital age, delivering customized solutions that optimize your operations and enhance customer experiences.
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
              <span className="text-[#0a3d62]">Retail </span>{" "}
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
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Digital Foundation Consulting</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Lay a solid digital foundation for your retail business with our consulting services. We'll help you align your technology strategy with your business goals for sustained growth.              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Hybrid Cloud</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Embrace the flexibility of hybrid cloud solutions tailored to the retail industry. Achieve scalability and agility while ensuring the security and compliance of your data              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Digital Workplace</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Transform your workplace into a digital powerhouse with our solutions. Empower your workforce with the tools and technologies they need to excel.              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Cybersecurity</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Safeguard your retail operations against cyber threats with our comprehensive cybersecurity solutions. Protect customer data, financial transactions, and your brand's reputation.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Retail;
