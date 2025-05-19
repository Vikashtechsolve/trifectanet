import React, { useState } from 'react';

const ExecutiveLeadershipTeam: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b]">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 h-auto md:h-[60vh] flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pl-4 md:pl-8 lg:pl-20 relative z-10 py-8 md:py-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-white">Executive</span>{" "}
              <span className="text-[#f47847]">Leadership Team</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-300">
              Meet the visionary leaders driving innovation and excellence at Accord Innovations.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 h-[30vh] md:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Leadership Team Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0a3d62] mb-8 md:mb-16">
            MEET OUR TEAM
          </h2>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20 bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b] rounded-xl p-6 md:p-10 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">12+</p>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg">Leaders</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">5+</p>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">15+</p>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">100+</p>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg">Team Members</p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Member 1 - Group CEO & Founder */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 1 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/Krishna.png"
                    alt="Krishna Chaitanya Sunkara"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Krishna Chaitanya Sunkara</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold">Group CEO & Founder</p>
                </div>
              </div>
            </div>

            {/* Member 2 - CEO */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 2 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/suchitra.png"
                    alt="Suchitra Sunkara"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Suchitra Sunkara</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Member 3 - Operations Director */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 3 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/swathi.png"
                    alt="Swathi Mula"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Swathi Mula</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold">Operations Director</p>
                </div>
              </div>
            </div>

            {/* Member 4 - Group COO */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 4 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/Alissha.png"
                    alt="Alisha Siddiqa Binti Sanmugam"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Alisha Siddiqa Binti Sanmugam</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold">Group COO</p>
                </div>
              </div>
            </div>

            {/* Member 5 - Group CTO */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 5 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/Rohit.png"
                    alt="Rohit Krupal"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Rohit Krupal</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold mb-4">Group CTO / Country Head - Malaysia</p>
                  {/* Removed social icons and description */}
                </div>
              </div>
            </div>

            {/* Member 6 - Group CFO */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 6 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    src="/images/ambika.png"
                    alt="Ambika Ayeappan"
                    className="w-full h-60 md:h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl md:text-2xl text-[#0a3d62] font-bold mb-2">Ambika Ayeappan</h3>
                  <p className="text-base md:text-lg text-[#f47847] font-semibold mb-4">Group CFO</p>
                  {/* Removed social icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0a3d62] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team and help drive innovation forward.
          </p>
          <button className="bg-[#f47847] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e56736] transition-colors duration-300">
            View Career Opportunities
          </button>
      </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadershipTeam;