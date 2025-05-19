import React from 'react';
// Removed motion import as it wasn't used in the original VisionMission code
// import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Adjusted structure for mobile: flex-col, image comes after text */}
      <section className="relative min-h-[60vh] bg-[#0a3d62] overflow-hidden"> {/* Added overflow-hidden */}
        {/* Container now uses flex-col by default, switching to flex-row on large screens */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row min-h-[60vh]"> {/* Adjusted padding and flex direction */}

          {/* Text Content Area */}
          {/* Takes full width on mobile, half width on large screens. Added padding top/bottom for mobile */}
          <div className="w-full lg:w-1/2 lg:pl-20 relative z-10 pt-16 pb-8 lg:py-0 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"> {/* Adjusted responsive text size */}
              <span className="text-white">Vision &</span>{" "}
              <span className="text-[#f47847]">Mission</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-300"> {/* Adjusted responsive text size */}
              Guiding principles that shape our journey towards excellence and innovation in technology solutions.
            </p>
          </div>

          {/* Image Area */}
          {/* Takes full width and defined height on mobile, absolute positioned on large screens */}
          {/* Order changed implicitly by flex-col on mobile */}
          <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full relative"> {/* Mobile height, lg absolute positioning */}
             {/* Gradient adjusted for mobile (bottom-up) vs large screens (left-to-right) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62] via-[#0a3d62]/80 to-transparent lg:bg-gradient-to-r z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Content */}
      <section className="py-12 md:py-16 bg-gray-50"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section - Content Left (Top on Mobile), Image Right (Bottom on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20"> {/* Adjusted gap and margin */}
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"> {/* Adjusted responsive text size */}
                <span className="text-[#0a3d62]">Our</span>{" "}
                <span className="text-[#f47847]">Vision</span>
              </h2>
              <div className="space-y-4 md:space-y-6"> {/* Adjusted spacing */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed"> {/* Adjusted responsive text size */}
                  We pride ourselves on being a globally enabled and trusted advisor, guiding businesses to overcome their toughest challenges. At Accord Innovations, we acknowledge that one size does not fit all, and hence our solutions are tailor-made to specifically adapt readily to our client's unique needs. With transparency and partnership at the core, we ensure quality-driven and cost-effective solutions.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative"> {/* Removed order classes as default flow is correct */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Our Vision"
                className="rounded-lg shadow-xl w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover" // Responsive width and height
              />
            </div>
          </div>

          {/* Mission Section - Image Left (Bottom on Mobile), Content Right (Top on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"> {/* Adjusted gap */}
            {/* Image - Order ensures it's below text on mobile */}
            <div className="relative order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Our Mission"
                className="rounded-lg shadow-xl w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover" // Responsive width and height
              />
            </div>
             {/* Text Content - Order ensures it's above image on mobile */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"> {/* Adjusted responsive text size */}
                <span className="text-[#f47847]">Our</span>{" "}
                <span className="text-[#0a3d62]">Mission</span>
              </h2>
              <div className="space-y-4 md:space-y-6"> {/* Adjusted spacing */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed"> {/* Adjusted responsive text size */}
                  At Accord Innovations, our mission is to propel businesses towards excellence by crafting tailor-made, innovative solutions. We strive to blend coming-of-age technology, determination, and long-standing industry expertise to exceed the expectations of our esteemed clients. With a commitment to quality, cost-effectiveness, and global leadership, we aim to be the dependable partner that harnesses the power of technology to empower growth and transform challenges into opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Optional: Add a CTA section here if desired */}
    </div>
  );
};

export default VisionMission;