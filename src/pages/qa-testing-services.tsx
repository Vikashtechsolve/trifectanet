import React from 'react';
import Hero from '../components/Hero';
import { CheckCircle, Activity, Shield, Code } from 'lucide-react';

const QATestingServices: React.FC = () => {
  return (
    <div>
      <Hero
        title="QA Testing"
        subtitle="Services"
        description="Ensure software quality and reliability with comprehensive testing solutions that identify issues early and deliver exceptional user experiences."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* QA Testing Services Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#0a3d62]">Domain</span>{" "}
                <span className="text-[#f47847]">Expertise</span>
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  QA testing extends beyond evaluating functionality; it demands a profound understanding of the domain in which the software operates. Our seasoned experts possess domain-specific knowledge across various industries.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Whether your software is related to data warehousing, microservices, big data, or blockchain, we have the expertise to ensure its seamless performance. Our domain expertise allows us to identify potential issues that might be overlooked by generalist testers.
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
                <span className="text-[#f47847]">Comprehensive Testing</span>{" "}
                <span className="text-[#0a3d62]">for Enhanced Reliability</span>
              </h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our QA Testing services go beyond routine functional testing. We perform an exhaustive range of testing activities, including automated and manual testing, functional testing, performance testing, penetration testing, load/stress testing, regression testing, and configuration testing.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Through our rigorous testing processes, our goal is to identify and rectify potential issues and vulnerabilities in your software. This ensures the reliability, stability, and security of your software in real-world scenarios. We strive to deliver software that not only functions flawlessly but also withstands the test of time and user interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QA Testing Services OFFERINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">QA Testing Services</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing solutions designed to ensure software quality, reliability, and exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Functional Testing */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Automated and Manual Testing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We employ both automated and manual testing methods to ensure comprehensive software quality assessment, combining human expertise with efficient tools for meticulous evaluation.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Performance Testing */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Functional Testing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Our experts rigorously evaluate your software's functionality to ensure it performs as intended, identifying and rectifying any deviations from expected behavior.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Security Testing */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Performance Testing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We assess your software's performance under various conditions to ensure it meets speed, scalability, and responsiveness requirements.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Automated Testing */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Penetration Testing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We simulate cyberattacks to uncover vulnerabilities and strengthen your software's security, safeguarding it against potential threats.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QATestingServices; 