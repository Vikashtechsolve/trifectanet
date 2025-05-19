import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Users, Target, Award, Globe, Building2, MapPin, Users2, Code2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutAccord: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="About"
        subtitle="Accord"
        description="Discover how Accord Innovations is transforming businesses through innovative technology solutions and exceptional service delivery."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={30} />
        <span className="text-sm mt-2">Scroll Down</span>
      </motion.div>

      {/* Company Overview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-6">Company Overview</h2>
              <div className="space-y-6 max-w-prose text-justify text-gray-700">
                <p>
                  Accord Innovation Global Technology Solutions (AI-GTS) is a dynamic and forward-thinking global business solutions provider, committed to delivering cutting-edge digital enterprise services. Headquartered in Malaysia, with a strong presence across Singapore, Thailand, Indonesia, the Philippines, India, and the USA, we specialize in IT services that encompass infrastructure and application monitoring for both traditional and cloud data centers, automation, outsourcing, and more.
                </p>
                <p>
                  With expertise in open-source and enterprise solutions, we tailor our services to meet the evolving needs of businesses. Our core capabilities include IT infrastructure and cloud management, leveraging advanced automation to drive operational efficiency. We offer a comprehensive suite of services, including consulting, implementation, workflow development, and managed services for industry-leading platforms such as ServiceNow, Salesforce, Amazon Web Services (AWS), ITIL processes, and Robotic & Intelligent IT Process Automation.
                </p>
              </div>
            </div>
            <motion.div 
              className="flex items-center justify-center h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Company Overview"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Section with Parallax Effect */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0a3d62] mb-12"
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-prose text-justify text-gray-700"
            >
              <p>
                At AI-GTS, we lead the way in Hyper Automation, Artificial Intelligence (AI), and cognitive technologies, powered by our proprietary Solution Accelerators that provide a distinct competitive edge. With over 13 years of industry experience, we have successfully helped organizations worldwide navigate their digital transformation journeys.
              </p>
              <p>
                Our expertise extends to Generative AI (GenAI) across various business functions, including ITSM, HRSD, IRM, DevOps, ITOM, and custom application development. Through Enterprise Service Management (ESM) services and enhanced governance solutions, we empower organizations to optimize their IT infrastructure, streamline operations, and stay ahead in an ever-evolving business landscape.
              </p>
              <p>
                Since our inception in 2011, AI-GTS has remained committed to delivering cost-effective and innovative ESM consulting services to enterprises globally, helping them unlock new efficiencies and drive long-term success.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg shadow-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="AI and Automation"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-[#0a3d62] text-white">
                  <h3 className="text-lg font-semibold">AI & Automation</h3>
                  <p className="text-sm">Leading the way in Hyper Automation and AI technologies</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Expertise Cards Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0a3d62] mb-12"
          >
            Our Core Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Proficiency */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Code2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Technical Proficiency</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Advanced expertise in IT infrastructure, cloud management, and automation solutions.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Industry Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Industry Experience</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Over 13 years of experience in digital transformation and enterprise solutions.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Global Reach */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Global Reach</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
                Strong presence across multiple countries with localized expertise and support.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section - Moved to the end */}
      <section className="py-16 md:py-24 bg-[#0a3d62] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founded */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#f47847] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-[#f47847]/10 mb-6 text-white group-hover:text-[#f47847] transition-colors duration-300">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f47847] transition-colors duration-300">Founded</h3>
              <p className="text-base text-white/80 relative z-10 leading-relaxed flex-grow">
                2011
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Employees */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#f47847] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-[#f47847]/10 mb-6 text-white group-hover:text-[#f47847] transition-colors duration-300">
                <Users2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f47847] transition-colors duration-300">Employees</h3>
              <p className="text-base text-white/80 relative z-10 leading-relaxed flex-grow">
                Over 1800
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Headquarters */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#f47847] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-[#f47847]/10 mb-6 text-white group-hover:text-[#f47847] transition-colors duration-300">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f47847] transition-colors duration-300">Headquarters</h3>
              <p className="text-base text-white/80 relative z-10 leading-relaxed flex-grow">
                Malaysia - Kuala Lumpur
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Global Presence */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border-t-4 border-[#f47847] overflow-hidden relative group h-full flex flex-col"
            >
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-[#f47847]/10 mb-6 text-white group-hover:text-[#f47847] transition-colors duration-300">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f47847] transition-colors duration-300">Global Presence</h3>
              <p className="text-base text-white/80 relative z-10 leading-relaxed flex-grow">
                India, Singapore, Thailand, Indonesia, Philippines & USA
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAccord;
