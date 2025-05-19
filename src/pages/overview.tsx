import React from 'react';
import { motion } from 'framer-motion';

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Adjusted structure for mobile: flex-col, image comes after text */}
      <section className="relative min-h-[60vh] bg-[#1E3A8A] overflow-hidden"> {/* Added overflow-hidden */}
        {/* Container now uses flex-col by default, switching to flex-row on large screens */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row min-h-[60vh]"> {/* Adjusted padding and flex direction */}

          {/* Text Content Area */}
          {/* Takes full width on mobile, half width on large screens. Added padding top/bottom for mobile */}
          <div className="w-full lg:w-1/2 lg:pl-20 relative z-10 pt-16 pb-8 lg:py-0 flex flex-col justify-center">
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"> {/* Slightly adjusted responsive text size */}
              <span className="text-white">About</span>{" "}
              <span className="text-[#f47847]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-300"> {/* Slightly adjusted responsive text size */}
              We are a leading technology solutions provider, helping businesses transform and innovate in the digital age.
            </p>
          </div>

          {/* Image Area */}
          {/* Takes full width and defined height on mobile, absolute positioned on large screens */}
          {/* Order changed implicitly by flex-col on mobile */}
          <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full relative"> {/* Mobile height, lg absolute positioning */}
            {/* Gradient adjusted for mobile (bottom-up) vs large screens (left-to-right) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent lg:bg-gradient-to-r z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16"> {/* Adjusted gap */}
            {/* Image div - order controlled by grid order classes */}
            <motion.div
              className="relative order-2 md:order-1" // Image comes second on mobile (order-2), first on md+ (md:order-1)
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Company Story"
                className="rounded-lg shadow-xl w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover" // Responsive height
              />
            </motion.div>
             {/* Text div - order controlled by grid order classes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center order-1 md:order-2" // Text comes first on mobile (order-1), second on md+ (md:order-2)
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6 md:mb-8"> {/* Adjusted responsive text size */}
                Bringing Innovative Technology Solutions for Your Success
              </h2>
              <div className="space-y-4 md:space-y-6"> {/* Adjusted spacing */}
                <p className="text-base md:text-lg text-gray-700 text-justify"> {/* Adjusted responsive text size */}
                  At Accord Innovations, we harness the power of technology and develop innovative solutions that cater to your diverse needs in this rapidly evolving market. We are the leaders in cutting-edge technology, analytics, and consulting services.
                </p>
                <p className="text-base md:text-lg text-gray-700 text-justify">
                  With an unwavering passion for technology, determination to solve complex problems, and a vision to create revolutionary solutions, we ensure sophisticated visual appeal, seamless usability and substantial profits.
                </p>
                <p className="text-base md:text-lg text-gray-700 text-justify">
                  Quality and cost-effectiveness intertwined with innovation are the cornerstones of our approach. We strive to be your dependable solutions partner, providing outcomes that exceed your expectations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"> {/* Adjusted gap */}
             {/* Image div - order controlled by grid order classes */}
            <motion.div
              className="md:order-2 order-2" // Image comes second on mobile (order-2), second on md+ (md:order-2)
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Global Presence"
                className="rounded-lg shadow-xl w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover" // Responsive height
              />
            </motion.div>
             {/* Text div - order controlled by grid order classes */}
            <motion.div
              className="md:order-1 order-1 flex flex-col justify-center" // Text comes first on mobile (order-1), first on md+ (md:order-1)
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Removed heading from here as it's implied continuation */}
              <div className="space-y-4 md:space-y-6"> {/* Adjusted spacing */}
                <p className="text-base md:text-lg text-gray-700 text-justify"> {/* Adjusted responsive text size */}
                  As a Microsoft Certified Partner, we hold ourselves to the highest industry standards, and aim to consistently deliver exceptional results in every endeavour. We cater to a wide array of key verticals, including Healthcare, Financial Services, Real Estate, Banking and Financial Services, Insurance, Telecommunications, Software, Aerospace & Aviation, Manufacturing, Retail, Consumer Electronics Sector, Energy, Travel & Logistics, Life Sciences, Medical Devices, Pharmaceutical, Automotive and the IT Industry.
                </p>
                <p className="text-base md:text-lg text-gray-700 text-justify">
                  With an exceptional team of over 1000 professionals, we have amassed 15+ years of valuable experience in the IT industry. We are proud to have served more than 500 active clients worldwide, with offices in six strategic locations across Asia-Pacific, making us truly global.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#0a3d62] text-white"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"> {/* Adjusted responsive text size */}
             Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto"> {/* Adjusted responsive text size */}
            Let's discuss how our innovative solutions can help you achieve your business goals.
          </p>
          <button className="bg-[#f47847] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors text-base md:text-lg"> {/* Adjusted padding and text size */}
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Overview;