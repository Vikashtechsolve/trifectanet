import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="px-4 py-3 mb-4 flex flex-col">
    <div className="text-3xl md:text-4xl font-bold text-[#f47847] mb-1">{number}</div>
    <div className="text-gray-300 text-sm md:text-base">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="bg-[#0a3d62] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Stats */}
          <div className="w-full md:w-5/12 mb-10 md:mb-0 bg-[#072c4b] rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-4">Our Impact By The Numbers</h2>
            <div className="grid grid-cols-2 gap-2">
              <StatItem number="15+" label="Years of Experience" />
              <StatItem number="1000+" label="Team Members" />
              <StatItem number="500+" label="Active Clients" />
              <StatItem number="6+" label="Branch Office Locations" />
            </div>
            <div className="mt-6 text-center">
              <button className="bg-[#072c4b] border border-[#f47847] text-[#f47847] hover:bg-[#f47847] hover:text-white transition-colors duration-300 px-4 py-2 rounded-full inline-flex items-center text-sm font-medium">
                Learn more about our achievements
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Right column - About Us */}
          <div className="w-full md:w-7/12 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f47847]">About Us</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Accord Innovations, we harness the power of technology and develop innovative solutions 
              that cater to your diverse needs in this rapidly evolving market. We are the leaders in 
              cutting-edge technology, analytics, and consulting services. With an unwavering passion 
              for technology, determination to solve complex problems, and a vision to create revolutionary 
              solutions, we ensure sophisticated visual appeal, seamless usability and substantial profits.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Quality and cost-effectiveness intertwined with innovation are the cornerstones of our approach. 
              We strive to be your dependable solutions partner, providing outcomes that exceed your expectations.
            </p>
            <button className="bg-[#f47847] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-flex items-center">
              Our Solutions
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;