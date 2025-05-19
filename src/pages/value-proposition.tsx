import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a3d62]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Value</span>{" "}
              <span className="text-[#f47847]">Proposition</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Discover how we create value and drive success for our clients through innovative solutions.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Innovation Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#0a3d62]">Accord Innovations: Your Partner for Success</span>{" "}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 text-justify">
                  At Accord Innovations, we proudly occupy the vanguard of IT solutions, setting new standards for excellence while delivering unparalleled services. Our unwavering commitment lies in curating the perfect amalgamation of reliability, adaptability, and cutting-edge innovation.
                </p>
                <p className="text-lg text-gray-700 text-justify">
                  At the heart of Accord Innovations, lies a passion for inventive problem-solving, a drive for excellence, and an unmatched dedication towards our clients. With a steadfast focus on your success, we pledge to be your trusted partner, equipping you with the tools, strategies, and support necessary to thrive in an ever-evolving digital landscape. Together, let's chart the course to your future achievements, hand in hand with Accord Innovations.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Innovative Solutions" 
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </motion.div>
          </div>

          {/* Expertise Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div 
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Industry Expertise" 
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#f47847]">Industry</span>{" "}
                <span className="text-[#0a3d62]">Expertise</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 text-justify">
                  With years of experience across diverse industries, our team brings deep domain knowledge and technical expertise to every project. We understand the unique challenges and opportunities within each sector, allowing us to deliver tailored solutions that address specific industry needs. Our proven track record demonstrates our ability to navigate complex environments and deliver results that exceed expectations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Client-Centric Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#0a3d62]">Client-Centric</span>{" "}
                <span className="text-[#f47847]">Approach</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 text-justify">
                  We place our clients at the center of everything we do. Our collaborative approach ensures that we fully understand your business objectives, challenges, and aspirations before developing solutions. We work as an extension of your team, providing personalized attention and dedicated support throughout the project lifecycle. This client-centric focus enables us to deliver solutions that truly align with your strategic goals and drive measurable business outcomes.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Client-Centric Approach" 
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </motion.div>
          </div>

          {/* Cost-Effective Solutions Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Cost-Effective Solutions" 
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#f47847]">Cost-Effective</span>{" "}
                <span className="text-[#0a3d62]">Solutions</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 text-justify">
                  We understand that value is not just about quality but also about cost-effectiveness. Our solutions are designed to deliver maximum return on investment while minimizing operational costs. By leveraging efficient processes, scalable technologies, and optimized resource allocation, we help our clients achieve their business objectives without compromising on quality or performance. Our commitment to cost-effectiveness ensures that you get the best value for your investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueProposition; 