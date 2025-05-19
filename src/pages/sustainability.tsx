import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <div className='w-full'>
      <div className="relative h-96 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Sustainability
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Sustainable Progress"
              className="w-full h-[450px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              <span className="text-[#0a3d62]">Journey of</span>{" "}
              <span className="text-[#f47847]">Sustainable Progress</span>
            </h2>
            <div className="space-y-6 max-w-prose text-justify text-gray-700">
              <p className="text-base md:text-lg leading-relaxed tracking-normal">
                At Accord Innovations, our overarching objective is to seamlessly blend technological excellence with a conscientious commitment to sustainability. We firmly believe that every action, no matter how small, has the potential to create profound and lasting impact. Sustainability isn't a mere buzzword in our ethos, it's a pledge that guides our daily operations.
              </p>
              <p className="text-base md:text-lg leading-relaxed tracking-normal">
                In our day-to-day functioning, we hold ourselves accountable to a higher standard. From embracing energy-efficient office practices to cultivating purposeful partnerships, every decision we make is underpinned by a genuine concern for the environment and society at large. We recognize that our choices today shape the world of tomorrow, and it's a responsibility we wholeheartedly embrace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full mx-auto px-4 md:px-20 py-16 bg-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#0a3d62]">Our</span>{" "}
            <span className="text-[#f47847]">Sustainability</span>{" "}
            <span className="text-[#0a3d62]">Pillars</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive approach to sustainability that encompasses ethical responsibility, operational efficiency, and community engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 - Ethical Responsibility */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Ethical Responsibility</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                We care deeply about sustainability because it aligns with our ethical responsibility. We believe that as a responsible corporate citizen, it's our duty to minimize our environmental impact. Sustainability remains an integral part of our moral compass.
              </p>
            </div>
          </div>

          {/* Card 2 - Responsible Operations */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Responsible Operations</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                Our operations are designed with sustainability at their core. From energy-efficient facilities to waste reduction initiatives, we continuously optimize our processes to minimize environmental impact while maximizing operational efficiency.
              </p>
            </div>
          </div>

          {/* Card 3 - Ethical Partnership */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Ethical Partnership</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                We carefully select partners who share our commitment to sustainability and ethical business practices. Together, we create value while upholding the highest standards of environmental and social responsibility.
              </p>
            </div>
          </div>

          {/* Card 4 - Community Engagement */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Community Engagement</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                Our commitment to community engagement goes beyond business. We actively participate in local initiatives, support sustainable development projects, and work closely with communities to create positive, lasting impact.
              </p>
            </div>
          </div>

          {/* Card 5 - Employee Well-being */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Employee Well-being</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                Our employees are our greatest asset. We foster a culture of well-being, providing a healthy work environment, promoting work-life balance, and encouraging sustainable practices in daily operations.
              </p>
            </div>
          </div>

          {/* Card 6 - Continuous Progress */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center p-6 z-20">
                <h3 className="text-2xl font-bold text-white text-center">Continuous Progress</h3>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed tracking-normal text-base md:text-lg text-justify">
                We are committed to continuous improvement in our sustainability efforts. Through regular assessment, innovation, and adaptation, we strive to enhance our environmental performance and social impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability; 