import React from 'react';
import Hero from '../components/Hero';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { LineChart } from 'lucide-react';

const ConsumerElectronicsSector: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Consumer"
        subtitle="Electronics"
        description="Driving innovation in consumer electronics with technology solutions that enhance product development, manufacturing, and user experience."
        backgroundImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Consumer Electronics Content */}
      <section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Importance of IT Solutions Section - Content Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
      <div className="order-2 md:order-1 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#0a3d62]">Importance of</span>{" "}
          <span className="text-[#f47847]">IT Solutions</span>
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            The consumer electronics industry is driven by rapid technological advancements and changing consumer preferences. IT solutions play a crucial role in product development, manufacturing efficiency, and delivering enhanced user experiences.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            From smart home devices to wearable technology, the integration of IT solutions enables seamless connectivity, data analytics, and personalized experiences. These technologies help manufacturers stay competitive, optimize production processes, and meet the evolving demands of tech-savvy consumers.
          </p>
        </div>
      </div>
      <div className="relative order-1 md:order-2 self-center">
        <img 
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Importance of IT Solutions" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
    </div>

    {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="relative order-1 self-center">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Accord Innovations' Contribution" 
          className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
        />
      </div>
      <div className="order-2 self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="text-[#f47847]">Accord Innovations'</span>{" "}
          <span className="text-[#0a3d62]">Contribution</span>
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-prose text-justify text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            Accord Innovations provides comprehensive IT solutions tailored to the consumer electronics industry. Our expertise in product development, manufacturing automation, and user experience design helps companies create innovative and competitive products.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            We leverage cutting-edge technologies such as IoT, AI, and cloud computing to enable smart manufacturing, predictive maintenance, and enhanced product functionality. With Accord Innovations as your technology partner, you can stay ahead of market trends and deliver exceptional consumer experiences.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
  {/* Banking & Financial Services OFFERINGS */}
  <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Consumer Electronics Sector </span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Security & Compliance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">eCommerce Web & App Development</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Transform your online presence with our eCommerce solutions. We develop web and app platforms that enhance the digital shopping experience for your customers.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Supply Chain Management Systems</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Streamline your supply chain operations with our management systems. Optimize inventory, reduce lead times, and improve overall supply chain efficiency.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Warehouse Management Systems</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Achieve greater control and visibility over your warehouse operations. Our systems enhance inventory accuracy, order fulfillment, and warehouse productivity.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group h-full flex flex-col">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Operations Management Solutions</h3>
              <p className="text-base text-gray-600 relative z-10 leading-relaxed flex-grow">
              Enhance the efficiency of your operations with our management solutions. From production processes to quality control, we help you achieve operational excellence in the consumer electronics industry.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConsumerElectronicsSector;
