import React from 'react';
import Hero from '../components/Hero';
import { GitBranch, Code, TestTube, Activity } from 'lucide-react';

const DevOps: React.FC = () => {
  return (
    <div>
      <Hero
        title="DevOps"
        subtitle="Services"
        description="Accelerate your software delivery with comprehensive DevOps solutions that streamline development, testing, and deployment processes while ensuring quality and reliability."
        backgroundImage="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Our</span>{" "}
              <span className="text-[#f47847]">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Is your organization stuck in the past vis-à-vis IT development and operations? Yes, then AI-GTS can help you implement new philosophies, practices and technologies that will offer instant boost to how your organisation delivers software applications and associated development services. Get your application development, delivery and maintenance aligned to boost profitability.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  We follow an iterative, continuous improvement methodology that emphasizes automation, collaboration, and measurement. This approach enables us to deliver DevOps solutions that drive efficiency, reduce time-to-market, and enhance product quality while maintaining security and compliance.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#f47847]">Accord Innovations'</span>{" "}
              <span className="text-[#0a3d62]">Contribution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
            <div className="order-2 flex flex-col justify-center h-full">
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  AI-GTS implements renowned DevOps infrastructure that results in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed tracking-normal">
                  <li>Improved speed at which products are developed and delivered.</li>
                  <li>Organisations stuck with traditional ways (segregated & disconnected) generally lack in co-ordination and collaboration. AI-GTS implements tools that align development and IT operations.</li>
                  <li>Automation is the key to any DevOps implementation. Our services ensure not just software development automation but also for the entire infrastructure landscape.</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  DevOps – A set of tools to faster product development and rendering services:
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  AI-GTS integrates third party DevOps process / system that can be synched with local IT infrastructure. However we also provide well known third part DevOps brands which are cloud-based where you can design and develop prototype, test and deliver. Our Cloud-based DevOps integration also allows organisations to maintain a new generation of agile business applications.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our DevOps integration and standalone cloud-based version reduces redundancy, improves efficiency and also the quality of the product delivered.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Application Development & Delivery through Automation:
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  AI-GTS analyses your organisation's current setup, its cultural pain points and based the assessment offers best solution for DevOps adoption. From infrastructure change to full application lifecycle, and from changing vintage perspectives / philosophies to deployment of automated development environment which is also repeatable are some of the DevOps solutions offered by AI-GTS.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  'DevOps' is a combination of two words 'Development' and 'Operations' and interestingly AI-GTS covers a gamut of technology integration services which not only covers these areas but also a rainbow of IT infrastructure subsets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps OFFERINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">DevOps</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps solutions designed to accelerate software delivery, enhance collaboration, and ensure quality through automation and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: CI/CD Pipeline */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <GitBranch size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">CI/CD Pipeline</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We design and implement robust CI/CD pipelines that automate the build, test, and deployment processes. Our solutions ensure consistent, reliable, and rapid software delivery while maintaining quality standards.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Infrastructure as Code */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Infrastructure as Code</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Our infrastructure as code solutions enable automated provisioning and management of cloud resources. We help you implement infrastructure automation using tools like Terraform, Ansible, and CloudFormation.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Automated Testing */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <TestTube size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Automated Testing</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We implement comprehensive automated testing solutions that cover unit, integration, and end-to-end testing. Our testing frameworks ensure code quality and reliability throughout the development lifecycle.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Monitoring & Observability */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Monitoring & Observability</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Our monitoring and observability solutions provide real-time insights into application and infrastructure performance. We help you implement comprehensive monitoring systems that enable proactive issue detection and resolution.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps; 