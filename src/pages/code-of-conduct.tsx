import React, { useState } from 'react';

const CodeOfConduct: React.FC = () => {
  // Removed activeSection state as it wasn't used for any dynamic styling based on hover
  // const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Adjusted structure for mobile: flex-col, image comes after text */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b] overflow-hidden"> {/* Added overflow-hidden */}
        {/* Container now uses flex-col by default, switching to flex-row on large screens */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row min-h-[50vh] md:min-h-[60vh]"> {/* Adjusted height and flex direction */}

          {/* Text Content Area */}
          {/* Takes full width on mobile, half width on large screens. Added padding top/bottom for mobile */}
          <div className="w-full lg:w-1/2 lg:pl-20 relative z-10 pt-12 pb-8 md:pt-16 lg:py-0 flex flex-col justify-center"> {/* Adjusted padding */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"> {/* Responsive text size */}
              <span className="text-white">Code of</span>{" "}
              <span className="text-[#f47847]">Conduct</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-300"> {/* Responsive text size */}
              Our commitment to ethical business practices and professional standards.
            </p>
          </div>

          {/* Image Area */}
          {/* Takes full width and defined height on mobile, absolute positioned on large screens */}
          <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-full relative"> {/* Responsive height, lg absolute positioning */}
             {/* Gradient adjusted for mobile (bottom-up) vs large screens (left-to-right) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62] via-[#0a3d62]/80 to-transparent lg:bg-gradient-to-r z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-gray-50"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Commitment Section - Image Left (Mobile: Bottom), Text Right (Mobile: Top) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20"> {/* Added items-center, adjusted gap/margin */}
            {/* Image */}
            <div className="relative order-2 md:order-1"> {/* Image second on mobile, first on md+ */}
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Our Commitment"
                className="rounded-lg shadow-xl w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover" // Responsive height
              />
            </div>
             {/* Text */}
            <div className="order-1 md:order-2 flex flex-col justify-center"> {/* Text first on mobile, second on md+. Added flex justify-center */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-6 md:mb-8"> {/* Responsive text size */}
                Ethical Commitment and Sustainability Initiatives
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 text-justify leading-relaxed"> {/* Justified text, responsive size, leading */}
                We, Accord Innovations, proudly align ourselves with the Responsible Business Alliance (RBA) Code of Conduct. This commitment extends throughout our ethos and operations, reflecting our steadfast commitment to environmental, social, and ethical standards in the electronics and technology industry.
              </p>
              <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed"> {/* Justified text */}
                The RBA Code of Conduct serves as our guiding framework, encompassing a comprehensive range of international norms and standards. These include the ILO International Labor Standards, Universal Declaration of Human Rights, ISO, OECD Guidelines for Multinational Enterprises, SA standards, and more. By adhering to the RBA Code of Conduct, we ensure that our entire ecosystem operates ethically and sustainably, promoting trust, accountability, and positive impacts.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16 md:mb-20"> {/* Adjusted margin */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-10 md:mb-12 text-center"> {/* Centered heading, adjusted margin */}
              Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"> {/* Responsive columns and gap */}
              {[
                // ... (Core Values data remains the same)
                 {
                  title: "Shared Responsibility",
                  description: "In this step towards ethical practices, we believe in shared responsibility, hence, we expect the same unwavering commitment to these practices from all our employees, business partners and suppliers.",
                  icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                },
                {
                  title: "Sustainability and Positive Impact",
                  description: "Our alignment with the RBA Code of Conduct goes beyond compliance—it reflects our dedication to sustainability and positive social impact. We actively work towards minimizing environmental impacts, fostering fair labor practices, and creating a net-positive effect on the communities we are associated with.",
                  icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                {
                  title: "Continuous Improvement",
                  description: "Accord Innovations is committed to continuous improvement in our ethical practices. We regularly assess our ethos and operations and identify areas for improvement, ensuring that our commitment to ethical business remains dynamic and effective.",
                  icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                {
                  title: "Trust and Accountability",
                  description: "Accord Innovations' commitment to ethical business practices and the RBA Code of Conduct underscores our commitment to building trust with our stakeholders. By upholding these standards, we prioritize accountability.",
                  icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col" // Added flex flex-col for consistent structure
                  // Removed hover state setters as activeSection state is removed
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center mb-5 md:mb-6 flex-shrink-0"> {/* Added flex-shrink-0 */}
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20"> {/* Adjusted icon size */}
                      <path fillRule="evenodd" d={value.icon} clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0a3d62]">{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p> {/* Adjusted text size */}
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines Section - Text Left (Mobile: Top), Image Right (Mobile: Bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20"> {/* Added items-center, adjusted gap/margin */}
             {/* Text Content */}
            <div className="order-1 md:order-1 flex flex-col justify-center"> {/* Text first on mobile and md+. Added flex justify-center */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-6 md:mb-8"> {/* Responsive text size */}
                Guidelines
              </h2>
              <ul className="space-y-3 md:space-y-4"> {/* Adjusted spacing */}
                {[
                  'Treat all team members with respect and courtesy',
                  'Maintain confidentiality of sensitive information',
                  'Report any violations or concerns promptly',
                  'Follow all applicable laws and regulations',
                  'Avoid conflicts of interest'
                ].map((guideline, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 text-base md:text-lg group" // Adjusted text size
                  >
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#1E3A8A] rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div> {/* Adjusted size/margin, added flex-shrink-0 */}
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
             {/* Image */}
            <div className="relative order-2 md:order-2"> {/* Image second on mobile and md+ */}
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Guidelines"
                className="rounded-lg shadow-xl w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover" // Responsive height
              />
            </div>
          </div>
        </div>
      </section>

      {/* Report a Concern Section */}
      <section className="py-12 md:py-16 bg-[#0a3d62] text-white"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"> {/* Responsive text size */}
            Report a Concern
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto"> {/* Responsive text size */}
            If you witness any violations of this code of conduct, please report them to our ethics team. All reports will be handled confidentially.
          </p>
          <button className="bg-[#f47847] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center mx-auto text-base md:text-lg"> {/* Adjusted padding/text size */}
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Adjusted icon size */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            Contact Ethics Team
          </button>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 md:py-16 bg-gray-50"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-10 md:mb-12 text-center"> {/* Responsive text size, adjusted margin */}
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Responsive columns and gap */}
            {[
               // ... (Additional Resources data remains the same)
              { title: 'Employee Handbook', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Ethics Guidelines', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Reporting Procedures', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Training Materials', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer flex items-center" // Added flex items-center
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"> {/* Adjusted size/margin, added flex-shrink-0 */}
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Adjusted icon size */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0a3d62] group-hover:text-[#1E3A8A] transition-colors duration-300"> {/* Adjusted text size */}
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-50 py-8">
        <div className="text-center text-gray-500 text-sm space-y-1">
          <p>Last updated: February 2024</p>
          <p>Version 2.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;