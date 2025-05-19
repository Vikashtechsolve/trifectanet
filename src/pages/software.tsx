import React from 'react';
import Hero from '../components/Hero';
import { Shield, CreditCard, LineChart, Database } from 'lucide-react';

const Software: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Software"
        subtitle="Solutions"
        description="Empowering businesses with cutting-edge software solutions that drive innovation, efficiency, and growth in the digital age."
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

     {/* Software Solutions Content */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Our Approach Section - Content Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
      <div className="order-2 md:order-1 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#0a3d62]">Why IT Solutions Matter</span>
        </h2>
        <div className="space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            In the software sector, IT solutions are the lifeblood that fuels innovation and competitiveness. They empower businesses to streamline development processes, enhance product quality, and efficiently manage resources.
          </p>
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            IT solutions also play a pivotal role in ensuring data security, compliance, and scalability, which are critical in a digital-first landscape. These technologies enable software companies to deliver superior products, maintain competitive advantage, and adapt to rapidly changing market demands.
          </p>
        </div>
      </div>
      <div className="relative order-1 md:order-2 self-center">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
          alt="Our Approach" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Our Solutions Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="relative order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
          alt="Our Solutions" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
      <div className="order-2 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#f47847]">How Accord Innovations Can Help</span>
        </h2>
        <div className="space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            At Accord Innovations, we specialize in harnessing the power of technology to address the unique challenges of the software industry. Our tailored IT solutions cater to Independent Software Vendors (ISVs) and software product companies.
          </p>
          <p className="text-base md:text-lg leading-relaxed tracking-normal">
            We offer a comprehensive suite of services, including consulting, product engineering, IT, BPO, and infrastructure solutions. By partnering with Accord Innovations, software companies can reduce R&D costs, accelerate time-to-market, and maintain a competitive edge in an ever-evolving industry landscape.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Software</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the unique challenges of the software industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Security & Compliance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Robust Data Security Solutions</h3>
              <p className="text-gray-600 relative z-10">In an industry where data security is paramount, we provide cutting-edge solutions to safeguard your sensitive financial data. Our comprehensive suite of security measures includes threat detection, encryption, and real-time monitoring to ensure your operations remain resilient against cyber threats.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Efficient Risk Management Systems</h3>
              <p className="text-gray-600 relative z-10">The BFSI sector faces ever-evolving risks. Our advanced risk management systems leverage data analytics and AI to provide real-time risk assessment and mitigation strategies. Stay ahead of risks, optimize decision-making, and enhance regulatory compliance with our solutions.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Customer-Centric Digital Platforms</h3>
              <p className="text-gray-600 relative z-10">Enhance customer experiences with our customer-centric digital platforms. From intuitive mobile banking apps to personalized financial advisory tools, we help you create digital solutions that resonate with your clients, increasing engagement and satisfaction.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Compliance and Regulatory Support</h3>
              <p className="text-gray-600 relative z-10">Regulatory compliance is non-negotiable in finance. We offer comprehensive solutions to automate compliance processes, ensuring that your institution remains in line with the latest regulations. Stay agile and adapt to changing compliance requirements effortlessly with Accord Innovations.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;
