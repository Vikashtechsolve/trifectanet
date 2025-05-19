import React, { useState } from 'react';
import Hero from '../components/Hero';
import { ClipboardList, Code, CheckCircle, Users, Cpu, Database, Globe, Shield } from 'lucide-react';

const SoftwareDevelopmentServices: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of software development services does Accord Innovations offer?",
      answer: "Accord Innovations offers a comprehensive range of software development services including web development, mobile app development, data science solutions, back-end development, software tools development, and embedded systems. Our services are tailored to meet the specific needs of businesses across various industries."
    },
    {
      question: "How long does it typically take to complete a software development project?",
      answer: "Project timelines vary depending on complexity, scope, and requirements. Simple projects might take 4-8 weeks, while complex enterprise solutions could take 6-12 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process."
    },
    {
      question: "What is your approach to software development?",
      answer: "We follow an agile development methodology that emphasizes iterative progress, continuous feedback, and adaptability. Our process includes requirements gathering, planning, design, development, testing, deployment, and ongoing maintenance. This approach ensures we deliver high-quality solutions that meet your business needs."
    },
    {
      question: "Do you provide ongoing support and maintenance after project completion?",
      answer: "Yes, we offer comprehensive post-development support and maintenance services. This includes bug fixes, performance optimization, security updates, and feature enhancements. Our team is committed to ensuring your software continues to perform optimally long after initial deployment."
    },
    {
      question: "How do you ensure the security of the software you develop?",
      answer: "Security is a top priority in all our development projects. We implement industry best practices for secure coding, conduct regular security audits, perform penetration testing, and follow OWASP guidelines. We also ensure compliance with relevant data protection regulations such as GDPR, HIPAA, and PCI DSS where applicable."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely. We have experience with a wide range of technologies and can adapt to your existing tech stack. Whether you're using legacy systems or cutting-edge technologies, our team can integrate new solutions seamlessly with your current infrastructure."
    }
  ];

  return (
    <div>
      <Hero
        title="Software"
        subtitle="Development"
        description="Transform Your Business with Expert Software Solutions. Enterprise-grade development services powering modern businesses forward."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0C4A6E"
        gradientColor="#0C4A6E"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0C4A6E]">Our</span>{" "}
              <span className="text-[#f47847]">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  We deliver cutting-edge software solutions that empower businesses to thrive in the digital age. Our expertise spans across multiple domains and technologies.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  At Accord Innovations, we offer a comprehensive suite of Software Development Services that cater to the diverse needs of businesses in the digital era. Our services are the driving force behind transforming your ideas and concepts into tangible, high-performing software solutions.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
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
              <span className="text-[#f47847]">Expert</span>{" "}
              <span className="text-[#0C4A6E]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
            <div className="order-2 flex flex-col justify-center h-full">
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our team of experts is driven by the desire to create software that not only meets your current needs but also prepares your business for the challenges of tomorrow.
                </p>
                <p className="text-base md:text-lg leading-relaxed tracking-normal">
                  Our structured approach ensures the development of optimum solutions with best practices in place. With a strong commitment to methodical progression, we empower businesses with tailored software development services that drive innovation and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Capabilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0C4A6E]">End-to-End</span>{" "}
              <span className="text-[#f47847]">Capabilities</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive software development services that address every aspect of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Planning & Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <ClipboardList size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Planning & Analysis</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We begin with a thorough analysis of your requirements, business goals, and technical constraints. Our team develops a comprehensive project plan that aligns with your objectives and timeline.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Design & Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Design & Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Our expert designers and developers create intuitive, scalable, and secure solutions. We follow industry best practices and agile methodologies to ensure high-quality code and efficient development.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Testing & Deployment */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Testing & Deployment</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                We conduct rigorous testing to identify and fix any issues before deployment. Our team handles the entire deployment process, ensuring a smooth transition to production with minimal disruption.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0C4A6E]">Our Development</span>{" "}
              <span className="text-[#f47847]">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <div className="space-y-6 max-w-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements Gathering</h4>
                    <p className="text-base text-gray-600 leading-relaxed">We work closely with you to understand your business needs, user requirements, and technical specifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h4>
                    <p className="text-base text-gray-600 leading-relaxed">Our team creates detailed designs and architecture plans that serve as the blueprint for development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h4>
                    <p className="text-base text-gray-600 leading-relaxed">We develop your solution using agile methodologies with continuous testing and feedback integration.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h4>
                    <p className="text-base text-gray-600 leading-relaxed">We handle deployment and provide ongoing support to ensure your solution continues to perform optimally.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Development Process" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0C4A6E]">Software Development</span>{" "}
              <span className="text-[#f47847]">Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Web Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Custom web applications built with modern technologies to provide seamless user experiences and robust functionality.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Mobile App Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Backend Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Backend Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Scalable and secure backend systems that power your applications with robust APIs and efficient data management.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Security & Compliance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0C4A6E] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0C4A6E]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0C4A6E]/10 to-[#f47847]/10 mb-6 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0C4A6E] group-hover:text-[#f47847] transition-colors duration-300">Security & Compliance</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Comprehensive security measures and compliance solutions to protect your applications and data from threats.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0C4A6E]">Frequently Asked</span>{" "}
              <span className="text-[#f47847]">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our software development services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                    expandedFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentServices; 